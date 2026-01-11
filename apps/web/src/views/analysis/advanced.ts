import { PageLayout } from "../../components/layout";

export const AsymptoticView = PageLayout(`
    <h1>Asymptotic Notations</h1>
    <div class="intro-text">
        How do we describe the "limits" of an algorithm? We use three Greek letters.
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        
        <div class="topic-card" style="cursor: default; border-left: 4px solid #ef4444;">
            <div class="card-header"><span style="font-size: 2rem;">O</span> <h2 style="margin:0;">Big O (Upper Bound)</h2></div>
            <p style="color: var(--subtext-color);">
                The <b>Worst Case</b> scenario. The algorithm will never be slower than this.<br>
                <i>"At most, it takes this long."</i>
            </p>
        </div>

        <div class="topic-card" style="cursor: default; border-left: 4px solid #22c55e;">
            <div class="card-header"><span style="font-size: 2rem;">Ω</span> <h2 style="margin:0;">Big Omega (Lower Bound)</h2></div>
            <p style="color: var(--subtext-color);">
                The <b>Best Case</b> scenario. The algorithm will never be faster than this.<br>
                <i>"At least, it takes this long."</i>
            </p>
        </div>

        <div class="topic-card" style="cursor: default; border-left: 4px solid #3b82f6;">
            <div class="card-header"><span style="font-size: 2rem;">Θ</span> <h2 style="margin:0;">Big Theta (Tight Bound)</h2></div>
            <p style="color: var(--subtext-color);">
                The <b>Average / Exact</b> interval. When the Best and Worst case are roughly the same.<br>
                <i>"It takes exactly this long (roughly)."</i>
            </p>
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="asymptotic-notations" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/analysis', 'Back to Analysis');

export const AnalysisCasesView = PageLayout(`
    <h1>Analysis Cases</h1>
    <div class="intro-text">
        Algorithms perform differently based on their input <b>data</b>, not just size.
    </div>

    <div class="roadmap-section">
        <div class="roadmap-container">
            
            <div class="roadmap-step" style="border-color: #22c55e; animation-delay: 0.1s;">
                <div class="step-icon" style="background: #22c55e;">Best</div>
                <div class="step-content">
                    <h3>Best Case (Minimum Time)</h3>
                    <p>
                        The "Lucky" case. <br>
                        Example: Linear Searching for 'X' and finding it at the <b>first index</b>. <br>
                        <b>O(1)</b>
                    </p>
                </div>
            </div>

            <div class="roadmap-connector">↓</div>

            <div class="roadmap-step" style="border-color: #f59e0b; animation-delay: 0.2s;">
                <div class="step-icon" style="background: #f59e0b;">Avg</div>
                <div class="step-content">
                    <h3>Average Case (Expected Time)</h3>
                    <p>
                        The "Realistic" case. <br>
                        Example: Searching for 'X' and finding it somewhere in the <b>middle</b>. <br>
                        <b>O(n/2) ≈ O(n)</b>
                    </p>
                </div>
            </div>

            <div class="roadmap-connector">↓</div>

            <div class="roadmap-step" style="border-color: #ef4444; animation-delay: 0.3s;">
                <div class="step-icon" style="background: #ef4444;">Worst</div>
                <div class="step-content">
                    <h3>Worst Case (Maximum Time)</h3>
                    <p>
                        The "Unlucky" case. <br>
                        Example: Searching for 'X' and it's at the <b>very end</b> or <b>not present</b> at all. <br>
                        <b>O(n)</b>
                    </p>
                </div>
            </div>

        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="analysis-cases" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/analysis', 'Back to Analysis');

export const AmortizedView = PageLayout(`
    <h1>Amortized Analysis</h1>
    <div class="intro-text">
        What if an operation is usually fast, but <i>occasionally</i> very slow?<br>
        Amortized analysis calculates the average cost per operation over a sequence of operations.
    </div>

    <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); text-align: center;">
        <h2>The Dynamic Array (ArrayList) Example</h2>
        <p style="color: var(--subtext-color); margin-bottom: 2rem;">
            A Dynamic Array doubles its size when full. <br>
            Most pushes are <b>O(1)</b>. <br>
            Comparison: buying a coffee every day vs buying a coffee machine once a year.
        </p>

        <div class="visualizer-container" style="flex-direction: column; gap: 1rem;">
             <div id="array-viz" style="display: flex; gap: 4px; justify-content: center; height: 50px;">
                <!-- Blocks injected here -->
             </div>
             <p id="cost-display" style="font-weight: bold; color: var(--primary-color);">Current Cost: 1</p>
             <button id="add-element-btn" class="primary-btn">Add Element</button>
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="amortized-analysis" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/analysis', 'Back to Analysis');

export function setupAmortizedViz() {
    const btn = document.getElementById('add-element-btn');
    const container = document.getElementById('array-viz');
    const costDisplay = document.getElementById('cost-display');
    if (!btn || !container || !costDisplay) return;

    let capacity = 2;
    let size = 0;

    // Init with 2 slots
    renderSlots();

    function renderSlots() {
        container!.innerHTML = '';
        for (let i = 0; i < capacity; i++) {
            const div = document.createElement('div');
            div.style.width = '30px';
            div.style.height = '100%';
            div.style.border = '1px solid var(--subtext-color)';
            div.style.backgroundColor = i < size ? 'var(--primary-color)' : 'transparent';
            div.style.transition = 'all 0.3s ease';
            container!.appendChild(div);
        }
    }

    btn.addEventListener('click', () => {
        size++;
        let cost = 1;

        if (size > capacity) {
            // Resize happened!
            cost = size; // Cost is proportional to copying old elements
            capacity *= 2;
            renderSlots();
            costDisplay.innerHTML = `Resize Triggered! Cost: ${cost} (O(n))`;
            costDisplay.style.color = '#ef4444';
        } else {
            renderSlots();
            costDisplay.innerHTML = `Inserted. Cost: ${cost} (O(1))`;
            costDisplay.style.color = '#22c55e';
        }

        // Reset color after delay
        setTimeout(() => {
            costDisplay.style.color = 'var(--primary-color)';
        }, 1000);
    });
}
