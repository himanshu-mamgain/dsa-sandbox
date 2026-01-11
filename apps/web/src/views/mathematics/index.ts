
const BackButton = (hash: string) => `
    <button class="back-button" onclick="location.hash = 'topic/${hash}'">
      <span>←</span> Back to Topic
    </button>
`;

export const CountDigitsView = `
    ${BackButton('mathematics')}
    <div class="content-container">
        <h1>Count Digits</h1>
        <div class="intro-text">
            Counting digits is the "Hello World" of number theory. 
            <br><br>
            Given a number $N$, how many digits does it have?
        </div>
        
        <div class="roadmap-step">
            <div class="step-icon" style="background: var(--primary-color)">123</div>
            <div class="step-content">
                <h3>The Logic</h3>
                <p>
                    We can chop off the last digit repeatedly by dividing by 10 until the number becomes 0.
                    <br><br>
                    <b>Example: 345</b><br>
                    1. 345 / 10 = 34 (Count: 1)<br>
                    2. 34 / 10 = 3&nbsp;&nbsp;&nbsp;  (Count: 2)<br>
                    3. 3 / 10 = 0&nbsp;&nbsp;&nbsp;&nbsp;   (Count: 3)
                </p>
            </div>
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; background: var(--surface-color); border-radius: 1rem; border: 1px solid var(--glass-border);">
            <h3>💡 Pro Tip: Logarithmic Approach</h3>
            <p>
                The number of digits in $N$ is exactly $\\lfloor \\log_{10}(N) \\rfloor + 1$.
                <br>
                <i>Example:</i> $\\log_{10}(100) = 2$, so digits = $2+1 = 3$.
            </p>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="count-digits" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const PalindromeView = `
    ${BackButton('mathematics')}
    <div class="content-container">
        <h1>Palindrome Numbers</h1>
        <div class="intro-text">
            A <b>Palindrome</b> reads the same backwards as forwards.
            <br>
            <i>Examples: 121, 1331, 4554</i>
        </div>
        
        <div class="roadmap-step" style="border-color: var(--secondary-color);">
            <div class="step-icon" style="background: var(--secondary-color)">🔁</div>
            <div class="step-content">
                <h3>How to check?</h3>
                <p>
                    1. Copy the original number.<br>
                    2. Construct the <b>Reverse</b> of the number.<br>
                    3. Compare Original == Reverse.
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="palindrome" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const FactorialView = `
    ${BackButton('mathematics')}
    <div class="content-container">
        <h1>Factorial & Trailing Zeros</h1>
        <div class="intro-text">
            <b>Factorial ($n!$)</b> is the product of all positive integers less than or equal to $n$.
            <br>
            $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
             <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: 1rem;">
                <h3>Recursive Definition</h3>
                <code>fact(n) = n * fact(n-1)</code>
             </div>
             <div style="background: var(--glass-bg); padding: 1.5rem; border-radius: 1rem;">
                <h3>Iterative Definition</h3>
                <code>res = 1; for i=2 to n: res *= i;</code>
             </div>
        </div>

        <div style="margin-top: 2rem; padding: 1.5rem; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.1);">
            <h3>Trailing Zeros Problem</h3>
            <p>
                How many zeros are at the end of $100!$?
                <br>
                A zero is formed by $2 \\times 5$. Since there are plenty of 2s, we just need to <b>count the 5s</b>.
                <br><br>
                Count = $\\lfloor n/5 \\rfloor + \\lfloor n/25 \\rfloor + \\lfloor n/125 \\rfloor + \\dots$
            </p>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="factorial" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const GcdLcmView = `
    ${BackButton('mathematics')}
    <div class="content-container">
        <h1>GCD & LCM</h1>
        <div class="intro-text">
            The building blocks of arithmetic and cryptographic algorithms.
        </div>
        
        <div class="roadmap-step">
            <div class="step-icon" style="background: #8b5cf6">GCD</div>
            <div class="step-content">
                <h3>Euclidean Algorithm</h3>
                <p>
                    To find GCD(a, b):<br>
                    If b is 0, answer is a.<br>
                    Otherwise, GCD(a, b) = <b>GCD(b, a % b)</b>.
                    <br><br>
                    <i>This is incredibly fast, O(log(min(a, b))).</i>
                </p>
            </div>
        </div>

        <div class="roadmap-step">
            <div class="step-icon" style="background: #ec4899">LCM</div>
            <div class="step-content">
                <h3>Relation to GCD</h3>
                <p>
                    $LCM(a, b) = \\frac{a \\times b}{GCD(a, b)}$
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="gcd-lcm" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;

export const PrimesView = `
    ${BackButton('mathematics')}
    <div class="content-container">
        <h1>Prime Numbers</h1>
        <div class="intro-text">
            A number divisible only by 1 and itself.
        </div>
        
        <div style="background: var(--surface-color); padding: 1.5rem; border-radius: 1rem; margin-bottom: 2rem;">
            <h3>Primality Test</h3>
            <p>To check if $N$ is prime, we only need to test divisors up to $\\sqrt{N}$.</p>
            <p style="color: var(--subtext-color);">If it has a factor larger than $\\sqrt{N}$, it must also have a specific factor smaller than $\\sqrt{N}$.</p>
        </div>

        <div class="roadmap-step" style="border-color: #10b981;">
            <div class="step-icon" style="background: #10b981">🕸️</div>
            <div class="step-content">
                <h3>Sieve of Eratosthenes</h3>
                <p>
                    An efficient way to find <i>all</i> primes up to $N$.
                    <br>
                    1. Create a list of numbers from 2 to $N$.<br>
                    2. Start with 2 (prime), cross out all multiples of 2.<br>
                    3. Move to next uncrossed number (3), cross out multiples.<br>
                    4. Repeat.
                </p>
            </div>
        </div>

        <div class="action-footer">
            <button id="mark-complete-btn" data-id="primes" class="complete-btn">
              Mark as Completed
            </button>
        </div>
    </div>
`;
