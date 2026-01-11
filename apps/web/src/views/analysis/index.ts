
import { PageLayout } from "../../components/layout";

export const AnalysisIntroductionView = PageLayout(`
    <h1>Analysis of Algorithms</h1>
    <div class="intro-text">
        Before writing code, we must know: <b>Will it scale?</b><br>
        Analysis is the art of predicting usage, speed, and memory before a single line of code is run.
    </div>

    <div class="topic-grid">
        
        <div class="topic-card" onclick="location.hash = 'big-o'">
            <div class="card-header">
                <h2>Big O Visualizer</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                Visualizing O(1) vs O(n) vs O(n²).
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                Interactive Chart →
            </div>
        </div>

        <div class="topic-card" onclick="location.hash = 'asymptotic-notations'">
            <div class="card-header">
                <h2>Asymptotic Notations</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                Big O, Big Omega, Big Theta.
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                Read Article →
            </div>
        </div>

        <div class="topic-card" onclick="location.hash = 'time-complexity'">
            <div class="card-header">
                <h2>Time Complexity</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                Growth rates & "Real Numbers".
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                Explore Growth →
            </div>
        </div>

         <div class="topic-card" onclick="location.hash = 'analysis-cases'">
            <div class="card-header">
                <h2>Best/Avg/Worst Cases</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                When does efficiency vary?
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                View Cases →
            </div>
        </div>

        <div class="topic-card" onclick="location.hash = 'space-complexity'">
            <div class="card-header">
                <h2>Space Complexity</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                Memory usage & Recursion Stack.
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                Learn More →
            </div>
        </div>

         <div class="topic-card" onclick="location.hash = 'amortized-analysis'">
            <div class="card-header">
                <h2>Amortized Analysis</h2>
            </div>
            <p style="color: var(--subtext-color); margin-top: 1rem;">
                The cost of Dynamic Arrays.
            </p>
            <div style="margin-top: auto; padding-top: 1.5rem; color: var(--primary-color); font-weight: 600;">
                Visualize →
            </div>
        </div>

    </div>
`);
