import { PageLayout } from "../../components/layout";

export const BacktrackingView = PageLayout(`
    <h1>Backtracking</h1>
    <div class="intro-text">
        Backtracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.
    </div>

    <div class="topic-grid" style="grid-template-columns: 1fr;">
        <div class="topic-card" style="cursor: default;">
            <h3>Key Concepts</h3>
            <ul style="line-height: 1.8; color: var(--subtext-color);">
                <li><b>Choice:</b> Make a random valid choice (e.g., place Queen at row 1, col 1).</li>
                <li><b>Constraint:</b> Check if the choice is valid (Is it safe?).</li>
                <li><b>Goal:</b> Have we placed all N queens?</li>
                <li><b>Backtrack:</b> If we stuck, undo the last choice and try the next one.</li>
            </ul>
        </div>
    </div>

    <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); margin-top: 2rem;">
        <h2>N-Queens Visualizer</h2>
        <p style="color: var(--subtext-color); margin-bottom: 2rem;">
            Place <b>4 Queens</b> on a 4x4 Chessboard such that no two queens attack each other.<br>
            <span style="font-size:0.9rem;">(Queens attack horizontally, vertically, and diagonally)</span>
        </p>

        <div style="display:flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
             <div class="visualizer-container" style="min-width: 300px; padding: 1rem;">
                  <div id="chessboard" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: #333; border: 4px solid #444; width: 240px; height: 240px; margin: 0 auto;">
                      <!-- Cells injected here -->
                  </div>
             </div>
             
             <div style="flex: 1; min-width: 250px;">
                  <div class="status-panel" style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; height: 100%;">
                      <h4 style="margin-top:0;">Execution Log</h4>
                      <div id="log-container" style="font-family: monospace; font-size: 0.85rem; color: var(--subtext-color); max-height: 200px; overflow-y: auto;">
                          Waiting to start...
                      </div>
                  </div>
             </div>
        </div>
        
        <div style="margin-top: 1rem; text-align: center;">
             <button id="run-nqueens-btn" class="primary-btn">Start Visualization</button>
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="backtracking" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/recursion', 'Back to Recursion');

export function setupBacktrackingViz() {
    const btn = document.getElementById('run-nqueens-btn');
    const board = document.getElementById('chessboard');
    const logs = document.getElementById('log-container');

    if (!btn || !board || !logs) return;

    // Config
    const N = 4;
    // State
    const grid: number[][] = Array(N).fill(0).map(() => Array(N).fill(0)); // 0: empty, 1: Queen

    // Init Grid UI
    function renderBoard() {
        board!.innerHTML = '';
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                const cell = document.createElement('div');
                cell.className = 'chess-cell';
                const isDark = (r + c) % 2 === 1;
                cell.style.backgroundColor = isDark ? '#64748b' : '#cbd5e1'; // slate-500, slate-300
                cell.style.display = 'flex';
                cell.style.justifyContent = 'center';
                cell.style.alignItems = 'center';
                cell.style.fontSize = '2rem';

                if (grid[r][c] === 1) {
                    cell.textContent = '♛';
                    cell.style.color = '#1e293b'; // Dark queen
                }

                cell.id = `cell-${r}-${c}`;
                board!.appendChild(cell);
            }
        }
    }

    renderBoard();

    function log(msg: string, color = 'var(--text-color)') {
        if (!logs) return;
        const div = document.createElement('div');
        div.textContent = `> ${msg}`;
        div.style.color = color;
        div.style.marginBottom = '4px';
        logs.appendChild(div);
        logs.scrollTop = logs.scrollHeight;
    }

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Solver
    async function solve(col: number): Promise<boolean> {
        if (col >= N) {
            log("Solution Found! All Queens placed.", '#22c55e');
            return true;
        }

        for (let row = 0; row < N; row++) {
            // Visualize Checking
            log(`Checking Row ${row}, Col ${col}...`);
            highlightCell(row, col, 'yellow');
            await sleep(500);

            if (isSafe(row, col)) {
                log(`Safe! Placing Queen at (${row}, ${col})`, '#3b82f6');
                grid[row][col] = 1;
                renderBoard(); // Update UI
                await sleep(600);

                if (await solve(col + 1)) {
                    return true;
                }

                // Backtrack
                log(`Backtracking from (${row}, ${col})`, '#ef4444');
                grid[row][col] = 0;
                renderBoard();
                await sleep(600);
            } else {
                log(`Unsafe position.`, '#ef4444');
                highlightCell(row, col, 'red'); // Indicate bad
                await sleep(400);
                renderBoard(); // Clear highlight
            }
        }
        return false;
    }

    function isSafe(row: number, col: number) {
        // Check row (left side)
        for (let i = 0; i < col; i++) {
            if (grid[row][i]) return false;
        }
        // Check upper diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (grid[i][j]) return false;
        }
        // Check lower diagonal
        for (let i = row, j = col; j >= 0 && i < N; i++, j--) {
            if (grid[i][j]) return false;
        }
        return true;
    }

    // Helper for temporary highlights without full re-render
    function highlightCell(r: number, c: number, color: string) {
        const cell = document.getElementById(`cell-${r}-${c}`);
        if (cell) {
            cell.style.boxShadow = `inset 0 0 0 4px ${color}`;
        }
    }

    btn.addEventListener('click', async () => {
        btn.setAttribute('disabled', 'true');
        logs!.innerHTML = '';
        // Reset grid
        for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) grid[r][c] = 0;
        renderBoard();

        await solve(0);
        btn.removeAttribute('disabled');
    });
}
