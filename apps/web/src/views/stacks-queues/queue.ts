import { PageLayout } from "../../components/layout";

export const QueueView = PageLayout(`
    <h1>Queue Visualizer</h1>
    <div class="intro-text">
        A <b>Queue</b> is a FIFO (First-In, First-Out) data structure. <br>
        Think of it like a line at a checkout counter or a <b>Printer Queue</b>.
    </div>

    <div class="topic-grid" style="grid-template-columns: 1fr; margin-bottom: 2rem;">
        <div class="topic-card" style="cursor: default;">
            <h3>Printer Job Scheduler</h3>
            <p style="color: var(--subtext-color);">
                Jobs are <b>Enqueued</b> at the rear (Back). <br>
                The printer <b>Dequeues</b> jobs from the front (Head) to print them.
            </p>
        </div>
    </div>

    <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); display: flex; gap: 2rem; flex-wrap: wrap; flex-direction: column;">
        
        <!-- Controls -->
        <div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
            <div class="form-group" style="margin-bottom:0; flex: 1;">
                <label style="display:block; margin-bottom: 0.5rem;">Document Name</label>
                <input type="text" id="doc-input" class="form-input" placeholder="e.g. Resume.pdf" value="Resume.pdf">
            </div>
            <button id="enqueue-btn" class="primary-btn">Print (Enqueue)</button>
            <button id="dequeue-btn" class="secondary-btn" style="border-color: #22c55e; color: #22c55e;">Finish Job (Dequeue)</button>
        </div>

        <!-- Visualization -->
        <div class="visualizer-container" style="min-height: 150px; display: flex; align-items: center; justify-content: flex-start; overflow-x: auto; padding: 2rem; position: relative;">
            <div style="position: absolute; left: 10px; top: 10px; font-size: 0.8rem; font-weight: bold; color: #22c55e;">HEAD (Front)</div>
            <div style="position: absolute; right: 10px; top: 10px; font-size: 0.8rem; font-weight: bold; color: var(--primary-color);">TAIL (Rear)</div>
            
            <div id="queue-container" style="display: flex; gap: 10px; align-items: center; width: 100%;">
                <!-- Queue Items Injected Here -->
                <div style="color: var(--subtext-color); font-style: italic;">Queue is empty</div>
            </div>
        </div>

        <div id="printer-status" style="font-family: monospace; color: var(--subtext-color);">
            Status: Idle
        </div>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="queue-viz" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/stacks-queues', 'Back to Stacks & Queues');

export function setupQueueViz() {
    const container = document.getElementById('queue-container');
    const input = document.getElementById('doc-input') as HTMLInputElement;
    const enqueueBtn = document.getElementById('enqueue-btn');
    const dequeueBtn = document.getElementById('dequeue-btn');
    const statusMsg = document.getElementById('printer-status');

    if (!container || !input || !enqueueBtn || !dequeueBtn) return;

    const queue: string[] = [];
    const MAX_SIZE = 6;

    function render() {
        container!.innerHTML = '';

        if (queue.length === 0) {
            container!.innerHTML = '<div style="color: var(--subtext-color); font-style: italic;">Queue is empty</div>';
            return;
        }

        queue.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'queue-item';
            el.textContent = item;
            el.style.minWidth = '100px';
            el.style.padding = '15px';
            el.style.background = index === 0 ? '#22c55e' : '#334155'; // Head is Green
            el.style.color = '#fff'; // White text
            el.style.borderRadius = '8px';
            el.style.textAlign = 'center';
            el.style.fontSize = '0.9rem';
            el.style.position = 'relative';
            el.style.animation = 'slideLeft 0.3s ease-out';

            // Connectors
            if (index < queue.length - 1) {
                const arrow = document.createElement('div');
                arrow.textContent = '←';
                arrow.style.color = 'var(--subtext-color)';
                arrow.style.fontSize = '1.2rem';
                container!.appendChild(el);
                container!.appendChild(arrow);
            } else {
                container!.appendChild(el);
            }
        });
    }

    enqueueBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (!val) return;
        if (queue.length >= MAX_SIZE) {
            alert("Queue is full! Wait for jobs to finish.");
            return;
        }
        queue.push(val);
        input.value = '';
        render();
        if (statusMsg) statusMsg.textContent = `Status: Added "${val}" to queue.`;
    });

    dequeueBtn.addEventListener('click', () => {
        if (queue.length === 0) {
            alert("Queue is empty! Nothing to print.");
            return;
        }
        const finished = queue.shift();
        render();
        if (statusMsg) statusMsg.textContent = `Status: Printing "${finished}"... Done.`;
    });
}
