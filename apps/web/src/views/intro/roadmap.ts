export const RoadmapView = `
    <button class="back-button" onclick="location.hash = ''">
      <span>←</span> Back to Dashboard
    </button>
    <div class="content-container">
      <h1>Roadmap to Learn DSA</h1>
      <p class="intro-text">
        DSA is not a sprint; it's a marathon. This roadmap provides a structured path, ensuring you build a strong foundation before tackling complex topics.
        <br><br>
        Each step builds upon the previous one. Skipping the basics usually leads to confusion later on when dealing with Trees or Graphs.
      </p>
      
      <div class="roadmap-section">
        <div class="roadmap-container">
          <div class="roadmap-step" style="animation-delay: 0.1s">
            <div class="step-icon">1</div>
            <div class="step-content">
              <h3>Basics & Logic</h3>
              <p>Understanding memory, variables, control flow, functions, and recursion. Only move forward when you can solve simple logic puzzles.</p>
            </div>
          </div>
          <div class="roadmap-connector">↓</div>
           <div class="roadmap-step" style="animation-delay: 0.2s">
            <div class="step-icon">2</div>
            <div class="step-content">
              <h3>Complexity Analysis</h3>
              <p>Learning to measure how code scales. This is the difference between a Junior dev who writes working code and a Senior who writes scalable code.</p>
            </div>
          </div>
          <div class="roadmap-connector">↓</div>
           <div class="roadmap-step" style="animation-delay: 0.3s">
            <div class="step-icon">3</div>
            <div class="step-content">
              <h3>Core Data Structures</h3>
              <p>Arrays (Sequential), Linked Lists (Pointer-based), Stacks/Queues (LIFO/FIFO), Maps (Key-Value), Trees (Hierarchical), Graphs (Network).</p>
            </div>
          </div>
          <div class="roadmap-connector">↓</div>
           <div class="roadmap-step" style="animation-delay: 0.4s">
            <div class="step-icon">4</div>
            <div class="step-content">
              <h3>Algorithms</h3>
              <p>Sorting (Merge/Quick), Searching (Binary), Graph Traversals (BFS/DFS), Dynamic Programming (Optimization), Greedy.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="action-footer">
        <button id="mark-complete-btn" data-id="roadmap" class="complete-btn">
          Mark as Completed
        </button>
      </div>
    </div>
`;

