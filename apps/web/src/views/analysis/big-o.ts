export const BigOView = `
    <button class="back-button" onclick="location.hash = 'topic/analysis'">
      <span>←</span> Back to Analysis
    </button>
    <div class="content-container">
        <h1>Big O Notation</h1>
        <div class="intro-text">
            <b>Big O Notation</b> is the language we use to talk about how <i>scalable</i> an algorithm is. It doesn't measure seconds; it measures <b>growth</b>.
            <br><br>
            It answers the question: <i>"If I give this algorithm 100x more data, how much slower will it get?"</i>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 2rem;">
            
            <div class="roadmap-step" style="border-color: #22c55e;">
                <div class="step-icon" style="background: #22c55e; font-size: 1.2rem;">O(1)</div>
                <div class="step-content">
                    <h3>Constant Time (Best)</h3>
                    <p>
                        No matter how much data you have, the operation takes the same amount of time.
                        <br><br>
                        <b>Analogy:</b> Checking the first page of a book. It takes 1 second whether the book has 10 pages or 1,000 pages.
                    </p>
                </div>
            </div>

            <div class="roadmap-step" style="border-color: #3b82f6;">
                <div class="step-icon" style="background: #3b82f6; font-size: 1.2rem;">O(n)</div>
                <div class="step-content">
                    <h3>Linear Time (Fair)</h3>
                    <p>
                        If you double the data, the time doubles.
                        <br><br>
                        <b>Analogy:</b> Reading a book page by page. If the book is twice as long, it takes twice as long to read.
                    </p>
                </div>
            </div>

            <div class="roadmap-step" style="border-color: #ef4444;">
                <div class="step-icon" style="background: #ef4444; font-size: 1rem;">O(n²)</div>
                <div class="step-content">
                    <h3>Quadratic Time (Slow)</h3>
                    <p>
                        If you double the data, the time quadruples (2² = 4). Usually involves nested loops.
                        <br><br>
                        <b>Analogy:</b> You have a class of students. You want every student to shake hands with every other student.
                    </p>
                </div>
            </div>

        </div>

        <div style="margin-top: 3rem; text-align: center;">
            <p style="color: var(--subtext-color);">There are others like O(log n) and O(n log n), which we will explore in Time Complexity.</p>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="big-o" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;
