
const BackButton = (hash: string) => `
    <button class="back-button" onclick="location.hash = 'topic/${hash}'">
      <span>←</span> Back to Topic
    </button>
`;

export const BitwiseOperatorsView = `
    ${BackButton('bit-magic')}
    <div class="content-container">
        <h1>Bitwise Operators</h1>
        <div class="intro-text">
            Manipulate data at the smallest level: <b>Bits (0s and 1s)</b>. Fast and efficient.
        </div>
        
        <div style="background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); margin-bottom: 2rem;">
            <h2>The Toolkit</h2>
            <ul style="list-style: none; padding: 0; font-size: 1.1rem; line-height: 2.2;">
                <li><b style="color: #3b82f6;">& (AND)</b> - Both must be 1. (1 & 1 = 1)</li>
                <li><b style="color: #ef4444;">| (OR)</b> - At least one is 1. (1 | 0 = 1)</li>
                <li><b style="color: #22c55e;">^ (XOR)</b> - Different is 1, Same is 0. (1 ^ 1 = 0)</li>
                <li><b style="color: #f59e0b;">~ (NOT)</b> - Inverts bits. (~1 = 0)</li>
                <li><b style="color: #a855f7;">&lt;&lt; (Left Shift)</b> - Multiplying by 2.</li>
                <li><b style="color: #a855f7;">&gt;&gt; (Right Shift)</b> - Dividing by 2.</li>
            </ul>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="bitwise-operators" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const CheckKthBitView = `
    ${BackButton('bit-magic')}
    <div class="content-container">
        <h1>Check K-th Bit</h1>
        <div class="intro-text">
            How do check if the $k$-th bit is set (1) or not (0)?
        </div>
        
        <div class="roadmap-step">
            <div class="step-icon" style="background: var(--primary-color)">K</div>
            <div class="step-content">
                <h3>The Logic</h3>
                <p>
                    We can shift 1 to the $k$-th position and perform an AND operation.
                    <br><br>
                    <code>if (n & (1 << k) != 0)</code>
                    <br><br>
                    <b>Example:</b> Check 2nd bit of 5 (101)<br>
                    1 << 2 = 100 (4)<br>
                    5 & 4 = 101 & 100 = 100 (Non-zero, so True)
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="check-kth-bit" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const CountSetBitsView = `
    ${BackButton('bit-magic')}
    <div class="content-container">
        <h1>Count Set Bits</h1>
        <div class="intro-text">
             Also known as the "Hamming Weight" or "Population Count".
        </div>
        
        <div class="roadmap-step" style="border-color: var(--secondary-color);">
            <div class="step-icon" style="background: var(--secondary-color)">#</div>
            <div class="step-content">
                <h3>Brian Kernighan’s Algorithm</h3>
                <p>
                    A trick to unset the rightmost set bit is <code>n = n & (n - 1)</code>.
                    <br><br>
                    <b>Algorithm:</b><br>
                    Loop while $n > 0$, do <code>n = n & (n-1)</code> and increment count.
                    <br>
                    <i>Time Complexity: O(Number of set bits) - Faster than checking every bit!</i>
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="count-set-bits" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const PowerOfTwoView = `
    ${BackButton('bit-magic')}
    <div class="content-container">
        <h1>Power of Two check</h1>
        <div class="intro-text">
            Is 4 a power of 2? Yes. Is 6? No. How to check efficiently?
        </div>
        
        <div style="background: var(--glass-bg); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border); text-align: center;">
            <h2 style="font-size: 2.5rem; color: #10b981; margin: 0;">n & (n - 1) == 0</h2>
            <p style="margin-top: 1rem; color: var(--subtext-color);">
                Powers of 2 have exactly one bit set (1, 2, 4, 8...).
                <br>
                If we subtract 1, all bits flip after that position. The AND will be 0.
            </p>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="power-of-two" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const OneOddOccurringView = `
    ${BackButton('bit-magic')}
    <div class="content-container">
        <h1>One Odd Occurring</h1>
        <div class="intro-text">
            Given an array where every number appears even times except one. Find that one.
        </div>
        
        <div class="roadmap-step" style="border-color: #f59e0b;">
            <div class="step-icon" style="background: #f59e0b">^</div>
            <div class="step-content">
                <h3>XOR Magic</h3>
                <p>
                    Properties:<br>
                    1. <code>x ^ 0 = x</code><br>
                    2. <code>x ^ x = 0</code>
                    <br><br>
                    So, <code>A ^ B ^ A = (A ^ A) ^ B = 0 ^ B = B</code>.
                    <br>
                    Just XOR all elements in the array. The pairs verify cancel out!
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="one-odd-occurring" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;
