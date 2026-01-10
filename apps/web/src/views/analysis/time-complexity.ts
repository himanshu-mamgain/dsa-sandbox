export const TimeComplexityView = `
    <button class="back-button" onclick="location.hash = 'topic/analysis'">
      <span>←</span> Back to Analysis
    </button>
    <div class="content-container">
        <h1>Time Complexity</h1>
        <div class="intro-text">
            Time Complexity specifically quantifies the amount of time an algorithm takes to run as a function of the length of the input.
        </div>
        
        <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); margin-bottom: 2rem;">
            <h2>The Growth Hierarchy</h2>
            <ul style="list-style: none; padding: 0; color: var(--subtext-color); font-size: 1.1rem; line-height: 2.2;">
                <li><b style="color: #22c55e;">O(1)</b> - Instant. Accessing an array index.</li>
                <li><b style="color: #84cc16;">O(log n)</b> - Fast. Cutting the problem in half each time (Binary Search).</li>
                <li><b style="color: #3b82f6;">O(n)</b> - Moderate. Iterating through a list once.</li>
                <li><b style="color: #f59e0b;">O(n log n)</b> - Slower. Sorting (Merge Sort, Quick Sort).</li>
                <li><b style="color: #ef4444;">O(n²)</b> - Slow. Nested loops (Bubble Sort).</li>
                <li><b style="color: #7f1d1d;">O(2ⁿ)</b> - Explosive. Recursive solutions without optimization.</li>
            </ul>
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(59, 130, 246, 0.1); border-radius: 1rem; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0; color: #3b82f6;">Visualize It</h3>
            <p style="margin-bottom: 0; color: var(--text-color);">
                Imagine searching for a name in a phone book. <br>
                - <b>O(n)</b>: Start at page 1, read every single name until you find it.<br>
                - <b>O(log n)</b>: Open the middle. Is the name before or after? Throw away the other half. Repeat. This is exponentially faster!
            </p>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="time-complexity" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;
