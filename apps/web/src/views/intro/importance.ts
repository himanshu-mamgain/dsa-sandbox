export const ImportanceView = `
    <button class="back-button" onclick="location.hash = ''">
      <span>←</span> Back to Dashboard
    </button>
    <div class="content-container">
        <h1>Why is DSA Important?</h1>
        <div class="intro-text">
            Writing code that "just works" isn't enough. DSA is about writing code that works <b>fast</b> and <b>scales</b>.
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="topic-card" style="min-width: auto; cursor: default;">
                <div class="card-header"><h2>🏎️ Efficiency</h2></div>
                <p style="color: var(--subtext-color);">A well-chosen Algorithm can turn a program that takes <b>years</b> to run into one that takes <b>seconds</b>.</p>
            </div>
            <div class="topic-card" style="min-width: auto; cursor: default;">
                <div class="card-header"><h2>📈 Scalability</h2></div>
                <p style="color: var(--subtext-color);">Handling 10 users is easy. Handling <b>10 million</b> users requires optimal Data Structures to manage memory and search operations.</p>
            </div>
            <div class="topic-card" style="min-width: auto; cursor: default;">
                <div class="card-header"><h2>💼 Problem Solving</h2></div>
                <p style="color: var(--subtext-color);">Tech companies ask DSA questions not to torture you, but to see if you can break down complex problems into logical steps.</p>
            </div>
        </div>

        <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(244, 63, 94, 0.1); border-radius: 1rem; border-left: 4px solid var(--secondary-color);">
            <h3 style="margin-top: 0; color: var(--secondary-color);">🎓 Expert Advice</h3>
            <ul style="color: var(--text-color); margin-bottom: 0; padding-left: 1.2rem;">
                <li style="margin-bottom: 0.5rem;"><b>Understand, don't memorize.</b> Patterns (like Sliding Window) repeat. Questions don't.</li>
                <li style="margin-bottom: 0.5rem;"><b>Brute Force first.</b> Solved is better than perfect. Then optimize.</li>
                <li><b>Practice consistency.</b> 1 problem a day > 10 problems on Sunday.</li>
            </ul>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="why-important" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

