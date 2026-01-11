const fs = require('fs');

// 1. Read input from Stdin
const inputData = fs.readFileSync(0, 'utf-8');
const testCases = JSON.parse(inputData);

const results = [];

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 2. Process
testCases.forEach(test => {
    const n = test.input[0];
    const result = factorial(n);
    
    // 3. Emit Result Event
    results.push({
        input: n,
        expected: test.expected,
        actual: result,
        passed: result === test.expected
    });
});

// 4. Output JSON to Stdout
console.log(JSON.stringify(results, null, 2));
