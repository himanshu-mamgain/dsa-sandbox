# DSA Sandbox

A premium, interactive playground for mastering Data Structures and Algorithms.

## Workflow: "Code Local, Visualize Global"

This sandbox is designed to work alongside your favorite IDE (VS Code, IntelliJ, etc.). We believe you learn best in your own environment, not a constrained browser textarea.

### How to Use

1. **Launch the Dashboard**: Open `visualizer/index.html` in your browser.
2. **Configure (Optional)**: Click the **Settings (⚙️)** icon to point the sandbox to your solutions directory (Default: `../user-solutions`).
3. **Select a Problem**: Choose a topic (e.g., Linked List) from the dashboard.
4. **Write Code**:
   - Navigate to `user-solutions/linked-list/` in your IDE.
   - Open `solution.java` (or create your own).
   - Implement the logic.
5. **Visualize**:
   - Run the provided test script: `npm run problem linked-list`.
   - Watch the visualizer in your browser update with your code's execution flow!

## Project Structure

- **visualizer/**: The frontend learning companion.
- **user-solutions/**: **YOUR WORKSPACE**. This is where you write code.
- **problems/**: Problem definitions and test cases (don't peek unless you get stuck!).
- **bin/**: Helper scripts to run your code and generate visualization data.

## Settings

The sandbox assumes a default structure, but you can customize paths in the **Settings** panel if you prefer to organize your solutions differently.
