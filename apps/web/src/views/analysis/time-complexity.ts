import { PageLayout } from "../../components/layout";

export const TimeComplexityView = PageLayout(`
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

    <div style="margin-bottom: 2rem;">
        <h2>The "Real Numbers" Check</h2>
        <div style="overflow-x: auto; background: var(--surface-color); border-radius: 1rem; border: 1px solid var(--glass-border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead style="background: rgba(255,255,255,0.05);">
                    <tr>
                        <th style="padding: 1rem;">N (Input)</th>
                        <th style="padding: 1rem; color: #22c55e;">O(1)</th>
                        <th style="padding: 1rem; color: #84cc16;">O(log n)</th>
                        <th style="padding: 1rem; color: #3b82f6;">O(n)</th>
                        <th style="padding: 1rem; color: #f59e0b;">O(n log n)</th>
                        <th style="padding: 1rem; color: #ef4444;">O(n²)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 1rem; font-weight: bold;">10</td>
                        <td style="padding: 1rem;">1</td>
                        <td style="padding: 1rem;">3</td>
                        <td style="padding: 1rem;">10</td>
                        <td style="padding: 1rem;">33</td>
                        <td style="padding: 1rem;">100</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 1rem; font-weight: bold;">100</td>
                        <td style="padding: 1rem;">1</td>
                        <td style="padding: 1rem;">7</td>
                        <td style="padding: 1rem;">100</td>
                        <td style="padding: 1rem;">664</td>
                        <td style="padding: 1rem;">10,000</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--glass-border);">
                        <td style="padding: 1rem; font-weight: bold;">1,000</td>
                        <td style="padding: 1rem;">1</td>
                        <td style="padding: 1rem;">10</td>
                        <td style="padding: 1rem;">1,000</td>
                        <td style="padding: 1rem;">9,965</td>
                        <td style="padding: 1rem;">1,000,000</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold;">10,000</td>
                        <td style="padding: 1rem;">1</td>
                        <td style="padding: 1rem;">13</td>
                        <td style="padding: 1rem;">10,000</td>
                        <td style="padding: 1rem;">132,877</td>
                        <td style="padding: 1rem; color: #ef4444;">100,000,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p style="font-size: 0.9rem; color: var(--subtext-color); margin-top: 1rem;">
            See how <b>O(n²)</b> becomes unusable (100 million ops) at just 10,000 elements, while <b>O(log n)</b> is practically instant (13 ops)?
        </p>
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
`, 'topic/analysis', 'Back to Analysis');
