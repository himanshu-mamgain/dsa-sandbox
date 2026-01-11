const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const solutionPath = process.argv[2];
const testCasesPath = process.argv[3];
const outputPath = process.argv[4];

if (!solutionPath || !testCasesPath || !outputPath) {
    console.error("Usage: node run-harness.js <solution-file> <test-cases-json> <output-json>");
    process.exit(1);
}

// 1. Read Test Cases
const testCases = JSON.parse(fs.readFileSync(testCasesPath, 'utf8'));
const results = [];

// 2. Identify Runner based on extension
const ext = path.extname(solutionPath);
let runner = null;
let args = [];

if (ext === '.js') {
    runner = 'node';
    args = [solutionPath]; // For JS, we might need a wrapper to inject inputs. 
                           // But for simplicity, let's assume the JS script reads stdin or args.
} else if (ext === '.java') {
    // Compile first? Or assume compiled?
    // For simplicity of this "sandbox", let's assume we run 'java SingleFileSource.java' (Java 11+)
    runner = 'java';
    args = [solutionPath];
} else if (ext === '.py') {
    runner = 'python';
    args = [solutionPath];
}
// Add simple C++ support via 'g++' and run? (Too complex for this step without compilation)

if (!runner) {
    console.error(`Unsupported file type: ${ext}`);
    process.exit(1);
}

// 3. Execute Loop
// NOTE: Real-world harness handles timeouts, errors, etc.
// Here we will pipe inputs to the process via STDIN.

console.log(`Running ${solutionPath}...`);

// We'll run the process ONCE and feed it all test cases via JSON on stdin?
// Or run it once per test case?
// OPTION 1: "Streaming" mode. The solution reads Line-Delimited JSON inputs.
// Let's assume the user code reads *ALL* inputs from stdin, processes them, and prints to stdout.

const child = spawn(runner, args);

let outputData = '';
child.stdout.on('data', (data) => {
    outputData += data.toString();
});

child.stderr.on('data', (data) => {
    console.error(`[STDERR]: ${data}`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    
    // 4. Parse Output (Assuming the user code emits JSON events/results)
    // We expect the user code to output the results JSON or Events JSON.
    try {
        // Attempt to extract JSON from output if there's noise
        const jsonMatch = outputData.match(/\[.*\]/s) || outputData.match(/\{.*\}/s);
        const finalJson = jsonMatch ? jsonMatch[0] : outputData;
        
        fs.writeFileSync(outputPath, finalJson);
        console.log(`Results saved to ${outputPath}`);
    } catch (e) {
        console.error("Failed to parse output JSON", e);
        fs.writeFileSync(outputPath, JSON.stringify({ error: "Output parse failed", raw: outputData }));
    }
});

// Write test cases to STDIN of the child process
child.stdin.write(JSON.stringify(testCases));
child.stdin.end();
