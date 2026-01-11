import { PageLayout } from "../../components/layout";

export const RecursionBasicsView = PageLayout(`
    <h1>Recursion Basics</h1>
    <div class="intro-text">
        Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.
    </div>

    <div class="topic-grid" style="grid-template-columns: 1fr;">
        <div class="topic-card" style="cursor: default;">
            <h3>The Anatomy of Recursion</h3>
            <ul style="line-height: 1.8; color: var(--subtext-color);">
                <li><b>Base Case:</b> The stopping condition. Without this, the recursion will run forever (Stack Overflow).</li>
                <li><b>Recursive Step:</b> The function calls itself with a modified input (usually smaller/closer to base case).</li>
            </ul>
        </div>
    </div>

    <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); margin-top: 2rem;">
        <h2>Interactive Recursion Tree (Fibonacci)</h2>
        <p style="color: var(--subtext-color); margin-bottom: 2rem;">
            Visualize <b>fib(n) = fib(n-1) + fib(n-2)</b>. <br>
            Notice how many redundant calculations happen (e.g., fib(2) is calculated multiple times).
        </p>

        <div class="controls-section" style="margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center;">
             <label>N = </label>
             <input type="number" id="fib-n" value="4" min="0" max="6" style="padding: 0.5rem; border-radius: 0.5rem; width: 60px;">
             <button id="run-fib-btn" class="primary-btn">Visualize Call Stack</button>
        </div>

        <div class="visualizer-container" style="flex-direction: column; min-height: 400px; position: relative; overflow: auto;">
             <div id="tree-container" style="display: flex; justify-content: center; align-items: flex-start; padding-top: 20px;">
                <!-- Tree nodes injected here -->
             </div>
             
             <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.5); padding: 0.5rem; border-radius: 0.5rem;">
                <div style="font-size: 0.8rem; color: var(--subtext-color);">Stack Depth: <span id="stack-depth" style="color: white; font-weight: bold;">0</span></div>
                <div style="font-size: 0.8rem; color: var(--subtext-color);">Status: <span id="status-text" style="color: var(--secondary-color);">Idle</span></div>
             </div>
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="recursion-basics" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/recursion', 'Back to Recursion');

export function setupRecursionViz() {
    const btn = document.getElementById('run-fib-btn');
    const container = document.getElementById('tree-container');
    const input = document.getElementById('fib-n') as HTMLInputElement;
    const depthDisplay = document.getElementById('stack-depth');
    const statusDisplay = document.getElementById('status-text');

    if (!btn || !container || !input) return;

    btn.addEventListener('click', async () => {
        const n = parseInt(input.value);
        if (n > 6) {
            alert("N > 6 creates a very large tree! Capped at 6 for visual clarity.");
            return;
        }

        container.innerHTML = ''; // parameters for width/height?
        // We need a proper tree layout. For simplicity in this text-based env, 
        // we'll build a simplified HTML tree using flexbox or CSS Grid? 
        // Actually, absolute positioning or SVG is better for lines.
        // Let's use a simple Flexbox recursive render.

        btn.setAttribute('disabled', 'true');
        await runFib(n, container);
        btn.removeAttribute('disabled');
        if (statusDisplay) statusDisplay.textContent = "Finished";
        if (statusDisplay) statusDisplay.style.color = "#22c55e";
    });

    async function runFib(n: number, parentEl: HTMLElement, depth = 0): Promise<number> {
        if (depthDisplay) depthDisplay.textContent = depth.toString();
        if (statusDisplay) {
            statusDisplay.textContent = `Calling fib(${n})`;
            statusDisplay.style.color = "var(--primary-color)";
        }

        // Create Node Visual
        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'tree-node-wrapper';
        nodeWrapper.style.display = 'flex';
        nodeWrapper.style.flexDirection = 'column';
        nodeWrapper.style.alignItems = 'center';
        nodeWrapper.style.margin = '0 10px';

        const circle = document.createElement('div');
        circle.className = 'node-circle';
        circle.textContent = `f(${n})`;
        circle.style.width = '40px';
        circle.style.height = '40px';
        circle.style.borderRadius = '50%';
        circle.style.background = '#1e293b'; // slate-800
        circle.style.border = '2px solid var(--primary-color)';
        circle.style.display = 'flex';
        circle.style.justifyContent = 'center';
        circle.style.alignItems = 'center';
        circle.style.fontWeight = 'bold';
        circle.style.fontSize = '0.8rem';
        circle.style.zIndex = '10';
        circle.style.transition = 'all 0.3s ease';

        nodeWrapper.appendChild(circle);
        parentEl.appendChild(nodeWrapper);

        // Highlight Active
        circle.style.background = 'var(--primary-color)';
        circle.style.color = 'white';
        await new Promise(r => setTimeout(r, 800)); // Wait
        circle.style.background = '#1e293b'; // Reset

        if (n <= 1) {
            // Base Case
            circle.style.borderColor = '#22c55e'; // Green for return
            if (statusDisplay) statusDisplay.textContent = `Base Case: Return ${n}`;
            await new Promise(r => setTimeout(r, 600));
            return n;
        }

        // Recursive Children Container
        const childrenContainer = document.createElement('div');
        childrenContainer.style.display = 'flex';
        childrenContainer.style.marginTop = '20px';
        childrenContainer.style.position = 'relative';

        // Horizontal connection line
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.top = '-10px';
        line.style.left = '50%';
        line.style.width = '2px';
        line.style.height = '10px';
        line.style.background = 'var(--subtext-color)';
        childrenContainer.appendChild(line);

        nodeWrapper.appendChild(childrenContainer);

        // Recursive Step
        const left = await runFib(n - 1, childrenContainer, depth + 1);
        const right = await runFib(n - 2, childrenContainer, depth + 1);

        // Result
        const res = left + right;
        circle.style.borderColor = '#22c55e';
        circle.title = `Returned: ${res}`;
        if (statusDisplay) statusDisplay.textContent = `fib(${n}) resolved to ${res}`;

        // Show return value tooltip/badge?
        const badge = document.createElement('span');
        badge.textContent = res.toString();
        badge.style.position = 'absolute';
        badge.style.top = '-10px';
        badge.style.right = '-10px';
        badge.style.background = '#22c55e';
        badge.style.fontSize = '0.7rem';
        badge.style.padding = '2px 6px';
        badge.style.borderRadius = '10px';
        circle.appendChild(badge); // Attach to circle

        if (depthDisplay) depthDisplay.textContent = depth.toString();
        await new Promise(r => setTimeout(r, 600));

        return res;
    }
}
