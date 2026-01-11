import { PageLayout } from "../../components/layout";

export const DefinitionView = PageLayout(`
    <h1>What is DSA?</h1>
    <div class="intro-text">
        <b>DSA</b> stands for <b>Data Structures</b> and <b>Algorithms</b>. They are a pair of concepts that govern how we handle information in computers.
        <br><br>
        It is not just about writing code; it's about <b>problem-solving efficiency</b>. If software is a car, then DSA is the engine logic that decides how fast and smoothly it runs.
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="roadmap-step" style="animation-delay: 0.1s; border-color: var(--primary-color);">
            <div class="step-icon" style="background: var(--primary-color)">DS</div>
            <div class="step-content">
                <h3>Data Structures (The "Container")</h3>
                <p>
                    A Data Structure is a specialized format for organizing, processing, retrieving, and storing data.
                    <br><br>
                    <b>Analogy:</b> Imagine a kitchen. <br>
                    - A <b>Spice Rack</b> is an <i>Array</i> (fixed slots, easy to see).<br>
                    - A <b>Stack of Plates</b> is a <i>Stack</i> (Last In, First Out).<br>
                    - A <b>Queue for Coffee</b> is a <i>Queue</i> (First In, First Out).<br>
                    <br>
                    Choosing the right "container" makes your task easier. You wouldn't put soup in a spice rack!
                </p>
            </div>
        </div>
        
        <div class="roadmap-step" style="animation-delay: 0.2s; border-color: var(--secondary-color);">
            <div class="step-icon" style="background: var(--secondary-color)">A</div>
            <div class="step-content">
                <h3>Algorithms (The "Recipe")</h3>
                <p>
                    An Algorithm is a finite sequence of well-defined instructions to solve a specific problem.
                    <br><br>
                    <b>Analogy:</b> The recipe to bake a cake.<br>
                    It takes inputs (flour, eggs, sugar) and provides steps (mix, bake, cool) to produce an output (cake).
                    <br>
                    A <i>good</i> algorithm is one that gets the result with the fewest steps (Time Complexity) and least mess (Space Complexity).
                </p>
            </div>
        </div>
    </div>

    <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(139, 92, 246, 0.1); border-radius: 1rem; border-left: 4px solid var(--primary-color);">
        <h3 style="margin-top: 0; color: var(--primary-color);">💡 Advice</h3>
        <p style="margin-bottom: 0; color: var(--text-color);">Don't memorize code definitions. Visualize the structure in your head. Ask yourself: <i>"How would I arrange this in the real world?"</i></p>
    </div>

    <div class="action-footer">
        <button id="mark-complete-btn" data-id="what-is-dsa" class="complete-btn">
          Mark as Completed
        </button>
    </div>
`);

