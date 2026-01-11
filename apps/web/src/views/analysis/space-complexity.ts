import { PageLayout } from "../../components/layout";

export const SpaceComplexityView = PageLayout(`
    <h1>Space Complexity</h1>
    <div class="intro-text">
        Time is money, but <b>Space is memory</b>. Space Complexity measures the total amount of memory (RAM) an algorithm needs to run to completion.
    </div>
    
    <div class="roadmap-step">
        <div class="step-icon" style="background: var(--primary-color)">RAM</div>
        <div class="step-content">
            <h3>Auxiliary Space vs Input Space</h3>
            <p>
                <b>Input Space</b>: The memory needed to store the input data itself.<br>
                <b>Auxiliary Space</b>: The <i>extra</i> space or temporary memory used by the algorithm.
                <br><br>
                Usually, when we talk about Space Complexity, we care about the <b>Auxiliary Space</b>.
            </p>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
        <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--glass-border);">
            <h3 style="color: #22c55e; margin-top: 0;">O(1) Space</h3>
            <p style="font-size: 0.9rem; color: var(--subtext-color);">
                Uses a fixed number of variables regardless of input size. <br><br>
                <i>Example: Sorting an array "in-place" without making a copy.</i>
            </p>
        </div>
        <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--glass-border);">
            <h3 style="color: #ef4444; margin-top: 0;">O(n) Space</h3>
            <p style="font-size: 0.9rem; color: var(--subtext-color);">
                Memory usage grows linearly with input. <br><br>
                <i>Example: Creating a new array to store the result of a transformation.</i>
            </p>
        </div>
    </div>

    <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(244, 63, 94, 0.1); border-radius: 1rem; border-left: 4px solid var(--secondary-color);">
        <h3 style="margin-top: 0; color: var(--secondary-color);">⚠️ The Trade-off</h3>
        <p style="margin-bottom: 0; color: var(--text-color);">
            Often, you can make an algorithm faster (Time) by using more memory (Space), or vice versa. This is called the <b>Time-Space Trade-off</b>.
        </p>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="space-complexity" class="complete-btn">
            Mark as Completed
        </button>
    </div>
`, 'topic/analysis', 'Back to Analysis');
