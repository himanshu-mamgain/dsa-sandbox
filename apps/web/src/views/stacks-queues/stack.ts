import { PageLayout } from "../../components/layout";

export const StackView = PageLayout(`
    <h1>Stack Visualizer</h1>
    <div class="intro-text">
        A <b>Stack</b> is a LIFO (Last-In, First-Out) data structure. <br>
        Think of it like a stack of plates or your <b>Browser History</b>.
    </div>

    <div class="topic-grid" style="grid-template-columns: 1fr; margin-bottom: 2rem;">
        <div class="topic-card" style="cursor: default;">
            <h3>Browser History Simulation</h3>
            <p style="color: var(--subtext-color);">
                When you visit a new page, it gets <b>Pushed</b> onto the stack. <br>
                When you click 'Back', the current page is <b>Popped</b> off.
            </p>
        </div>
    </div>

    <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); display: flex; gap: 2rem; flex-wrap: wrap;">
        
        <!-- Controls -->
        <div style="flex: 1; min-width: 250px; display: flex; flex-direction: column; gap: 1rem;">
            <h3>Navigation</h3>
            <div class="form-group">
                <input type="text" id="url-input" class="form-input" placeholder="Enter website (e.g. google.com)" value="google.com">
            </div>
            <button id="visit-btn" class="primary-btn">Visit Site (Push)</button>
            <button id="back-btn" class="secondary-btn">Go Back (Pop)</button>
            <button id="peek-btn" class="secondary-btn" style="border-color: #f59e0b; color: #f59e0b;">Peek Current</button>
            
            <div id="stack-status" style="margin-top: 1rem; font-family: monospace; color: var(--subtext-color);">
                Stack Size: 0
            </div>
        </div>

        <!-- Visualization -->
        <div style="flex: 1; min-width: 300px; display: flex; justify-content: center; align-items: flex-end;">
            <div id="stack-container" style="
                width: 200px;
                min-height: 300px;
                border-left: 4px solid var(--glass-border);
                border-right: 4px solid var(--glass-border);
                border-bottom: 4px solid var(--glass-border);
                border-radius: 0 0 10px 10px;
                display: flex;
                flex-direction: column-reverse;
                justify-content: flex-start;
                align-items: center;
                padding: 10px;
                background: rgba(0, 0, 0, 0.2);
                position: relative;
            ">
                <div style="position: absolute; top: -25px; color: var(--subtext-color); font-size: 0.8rem;">TOP</div>
                <!-- Stack Items Injected Here -->
            </div>
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="stack-viz" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/stacks-queues', 'Back to Stacks & Queues');

export function setupStackViz() {
    const container = document.getElementById('stack-container');
    const input = document.getElementById('url-input') as HTMLInputElement;
    const visitBtn = document.getElementById('visit-btn');
    const backBtn = document.getElementById('back-btn');
    const peekBtn = document.getElementById('peek-btn');
    const statusMsg = document.getElementById('stack-status');

    if (!container || !input || !visitBtn || !backBtn) return;

    const stack: string[] = [];
    const MAX_SIZE = 7;

    function render() {
        container!.innerHTML = '';
        container!.appendChild(document.createElement('div')).outerHTML =
            `<div style="position: absolute; top: -25px; color: var(--subtext-color); font-size: 0.8rem;">TOP</div>`;

        stack.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'stack-item';
            el.textContent = item;
            el.style.width = '90%';
            el.style.padding = '10px';
            el.style.marginBottom = '5px';
            el.style.background = index === stack.length - 1 ? 'var(--primary-color)' : '#334155'; // Highlight top
            el.style.color = 'white';
            el.style.borderRadius = '5px';
            el.style.textAlign = 'center';
            el.style.fontSize = '0.9rem';
            el.style.animation = 'slideDown 0.3s ease-out';
            container!.appendChild(el);
        });

        if (statusMsg) {
            statusMsg.textContent = `Stack Size: ${stack.length} / ${MAX_SIZE}`;
            if (stack.length > 0) {
                statusMsg.innerHTML += `<br>Current Page: <span style="color: var(--primary-color)">${stack[stack.length - 1]}</span>`;
            } else {
                statusMsg.innerHTML += `<br>Current Page: <span style="color: var(--subtext-color)">Blank Tab</span>`;
            }
        }
    }

    visitBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (!val) return;
        if (stack.length >= MAX_SIZE) {
            alert("Stack Overflow! History is full.");
            return;
        }
        stack.push(val);
        input.value = ''; // Clear input for next
        render();
    });

    backBtn.addEventListener('click', () => {
        if (stack.length === 0) {
            alert("Stack Underflow! No history to go back to.");
            return;
        }
        stack.pop();
        render();
    });

    peekBtn?.addEventListener('click', () => {
        if (stack.length === 0) {
            alert("Stack is empty.");
        } else {
            alert(`Top of stack: ${stack[stack.length - 1]}`);
        }
    });

    // Initial render
    render();
}
