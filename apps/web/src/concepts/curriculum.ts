import { ProgressService } from '../lib/progress';

export type ContentType = 'article' | 'visualizer' | 'quiz' | 'video';

export interface SubTopic {
    id: string;
    title: string;
    type: ContentType;
    description?: string;
    route?: string; // e.g., '#playlist' 
    isCompleted?: boolean;
}

export interface Topic {
    id: string;
    title: string;
    description: string;
    progress?: number;
    subtopics: SubTopic[];
}

// The main mapping object
export const CURRICULUM: Record<string, Topic> = {
    'intro': {
        id: 'intro',
        title: '0. Introduction',
        description: 'The foundation of Computer Science. Start your journey here.',
        subtopics: [
            {
                id: 'what-is-dsa',
                title: 'Definition: What is DSA?',
                type: 'article',
                description: 'Data Structures organize data. Algorithms process it. Learn the core definitions.',
                route: 'definition'
            },
            {
                id: 'why-important',
                title: 'Why is DSA Important?',
                type: 'article',
                description: 'From Google Search to your playlist, efficient code runs the world.',
                route: 'importance'
            },
            {
                id: 'roadmap',
                title: 'Roadmap to learn DSA',
                type: 'article',
                description: 'A step-by-step guide from basics to advanced algorithms.',
                route: 'roadmap',
            }
        ]
    },
    'analysis': {
        id: 'analysis',
        title: '1. Time & Space Complexity',
        description: 'Big O, Big Theta, Big Omega. Worst, average, and best cases.',
        subtopics: [
            {
                id: 'big-o',
                title: 'Big O Visualizer',
                type: 'visualizer',
                route: 'big-o',
                description: 'Interactive visualization of O(1) vs O(n) vs O(n²).'
            },
            {
                id: 'asymptotic-notations',
                title: 'Asymptotic Notations',
                type: 'article',
                route: 'asymptotic-notations',
                description: 'Big O (Upper), Big Omega (Lower), and Big Theta (Tight) bounds.'
            },
            {
                id: 'time-complexity',
                title: 'Time Complexity',
                type: 'article',
                route: 'time-complexity',
                description: 'Visualize how execution time grows with input size.'
            },
            {
                id: 'analysis-cases',
                title: 'Best, Average, Worst Cases',
                type: 'article',
                route: 'analysis-cases',
                description: 'Understanding performance variations.'
            },
            {
                id: 'space-complexity',
                title: 'Space Complexity',
                type: 'article',
                route: 'space-complexity',
                description: 'Memory usage and Call Stack growth visualization.'
            },
            {
                id: 'amortized-analysis',
                title: 'Amortized Analysis',
                type: 'visualizer',
                route: 'amortized-analysis',
                description: 'Dynamic Arrays and resizing costs explained.'
            }
        ]
    },
    'bit-magic': {
        id: 'bit-magic',
        title: '2. Bit Magic',
        description: 'Master bitwise operations. XOR tricks, setting/clearing bits, and binary optimizations.',
        subtopics: [
            {
                id: 'bitwise-operators',
                title: 'Bitwise Operators',
                type: 'article',
                route: 'bitwise-operators',
                description: 'AND, OR, XOR, NOT, and Shifts.'
            },
            {
                id: 'check-kth-bit',
                title: 'Check K-th Bit',
                type: 'article',
                route: 'check-kth-bit',
                description: 'Check whether the K-th bit is set or not.'
            },
            {
                id: 'first-set-bit',
                title: 'First Set Bit',
                type: 'article',
                route: 'first-set-bit',
                description: 'Find the position of the first set bit.'
            },
            {
                id: 'count-set-bits',
                title: 'Count Set Bits',
                type: 'article',
                route: 'count-set-bits',
                description: 'Brian Kernighan’s Algorithm.'
            },
            {
                id: 'power-of-two',
                title: 'Power of 2',
                type: 'article',
                route: 'power-of-two',
                description: 'Check if a number is a power of 2.'
            },
            {
                id: 'one-odd-occurring',
                title: 'One Odd Occurring',
                type: 'article',
                route: 'one-odd-occurring',
                description: 'Find the unique number using XOR.'
            },
            {
                id: 'bit-difference',
                title: 'Bit Difference',
                type: 'article',
                route: 'bit-difference',
                description: 'Count bits to flip to convert A to B.'
            },
            {
                id: 'swap-odd-even-bits',
                title: 'Swap Odd & Even Bits',
                type: 'article',
                route: 'swap-odd-even-bits',
                description: 'Swap all odd and even bits.'
            }
        ]
    },
    'recursion': {
        id: 'recursion',
        title: '3. Recursion & Backtracking',
        description: 'Solving problems by breaking them down. Fibonacci, N-Queens, Maze solving.',
        subtopics: [
            {
                id: 'recursion-basics',
                title: 'Recursion Basics',
                type: 'visualizer',
                route: 'recursion-basics',
                description: 'Visualizing the call stack with Fibonacci & Factorial.'
            },
            {
                id: 'backtracking',
                title: 'Backtracking',
                type: 'visualizer',
                route: 'backtracking',
                description: 'N-Queens and Maze Solving visualizations.'
            }
        ]
    },
    'arrays': {
        id: 'arrays',
        title: '4. Arrays & Strings',
        description: 'Sliding window, two-pointer, prefix sums. The bread and butter of DSA.',
        subtopics: [
            {
                id: 'sliding-window',
                title: 'Sliding Window',
                type: 'visualizer',
                description: 'Visualizing window movement and finding subarrays.'
            },
            {
                id: 'two-pointers',
                title: 'Two Pointers',
                type: 'visualizer',
                description: 'Optimizing sorting and searching tasks.'
            }
        ]
    },
    'linked-list': {
        id: 'linked-list',
        title: '5. Linked Lists',
        description: 'Singly, doubly, circular lists. Visualized as nodes with pointers.',
        subtopics: [
            {
                id: 'singly-ll',
                title: 'Singly Linked List',
                type: 'visualizer',
                description: 'Animate insertion, deletion, and reversal.'
            },
            {
                id: 'doubly-ll',
                title: 'Doubly Linked List (Playlist)',
                type: 'visualizer',
                route: 'playlist',
                description: 'Build a Spotify-like playlist using bidirectional nodes.'
            },
            {
                id: 'circular-ll',
                title: 'Circular Lists',
                type: 'visualizer',
                description: 'Loops and ring buffers.'
            }
        ]
    },
    'stacks-queues': {
        id: 'stacks-queues',
        title: '6. Stacks & Queues',
        description: 'LIFO & FIFO. Browser history, task scheduling, and monotonicity.',
        subtopics: [
            {
                id: 'stack-viz',
                title: 'Stack Visualizer',
                type: 'visualizer',
                route: 'stack-viz',
                description: 'Vertical stack of boxes (Browser History).'
            },
            {
                id: 'queue-viz',
                title: 'Queue Visualizer',
                type: 'visualizer',
                route: 'queue-viz',
                description: 'Horizontal queue (Print Jobs / Task Scheduling).'
            }
        ]
    },
    'hashing': {
        id: 'hashing',
        title: '7. Hashing / Hash Maps',
        description: 'Frequency counting, two-sum, collision handling.',
        subtopics: [
            {
                id: 'hash-basics',
                title: 'Hash Table Basics',
                type: 'visualizer',
                description: 'Key-value pairs, buckets, and collision resolution.'
            }
        ]
    },
    'trees': {
        id: 'trees',
        title: '8. Trees',
        description: 'Binary trees, BST, AVL. Visualizing traversals (Inorder, Preorder, Postorder).',
        subtopics: [
            {
                id: 'tree-traversal',
                title: 'Traversals',
                type: 'visualizer',
                description: 'Animate traversal paths on a binary tree.'
            },
            {
                id: 'bst-ops',
                title: 'BST Operations',
                type: 'visualizer',
                description: 'Search, Insert, and Delete in a Binary Search Tree.'
            }
        ]
    },
    'graphs': {
        id: 'graphs',
        title: '9. Graphs',
        description: 'BFS, DFS, Dijkstra, MST. Modeling networks and connections.',
        subtopics: [
            {
                id: 'bfs-dfs',
                title: 'BFS & DFS',
                type: 'visualizer',
                description: 'Queue vs Stack based traversal animations.'
            },
            {
                id: 'shortest-path',
                title: 'Shortest Path (Dijkstra)',
                type: 'visualizer',
                description: 'Finding the quickest route between nodes.'
            }
        ]
    },
    'dp': {
        id: 'dp',
        title: '10. Dynamic Programming',
        description: 'Memoization vs Tabulation. Knapsack, Coin change, LIS.',
        subtopics: [
            {
                id: 'dp-fib',
                title: 'DP vs Recursion',
                type: 'visualizer',
                description: 'Compare recursion tree with DP table filling.'
            }
        ]
    },
    'greedy': {
        id: 'greedy',
        title: '11. Greedy Algorithms',
        description: 'Making local optimal choices. Huffman coding, Interval scheduling.',
        subtopics: [
            {
                id: 'greedy-basics',
                title: 'Greedy Concepts',
                type: 'article',
                description: 'Understanding when greedy works vs when it fails.'
            }
        ]
    },
    'sorting-searching': {
        id: 'sorting-searching',
        title: '12. Sorting & Searching',
        description: 'Bubble, Merge, Quick Sort. Binary Search.',
        subtopics: [
            {
                id: 'sorting-viz',
                title: 'Sorting Visualizer',
                type: 'visualizer',
                description: 'Compare Bubble, Insertion, Merge, and Quick sort.'
            },
            {
                id: 'binary-search',
                title: 'Binary Search',
                type: 'visualizer',
                description: 'Visualizing the "divide and conquer" search.'
            }
        ]
    },
    'miscellaneous': {
        id: 'miscellaneous',
        title: '13. Mathematics & Others',
        description: 'Math foundations and other algorithms.',
        subtopics: [
            {
                id: 'count-digits',
                title: 'Count Digits',
                type: 'article',
                route: 'count-digits',
                description: 'Logarithmic approach to counting digits.'
            },
            {
                id: 'palindrome',
                title: 'Palindrome Numbers',
                type: 'article',
                route: 'palindrome',
                description: 'Checking symmetry in numbers.'
            },
            {
                id: 'factorial',
                title: 'Factorial',
                type: 'article',
                route: 'factorial',
                description: 'Iterative vs Recursive factorial.'
            },
            {
                id: 'gcd-lcm',
                title: 'GCD & LCM',
                type: 'article',
                route: 'gcd-lcm',
                description: 'Euclidean algorithm.'
            },
            {
                id: 'math-primes',
                title: 'Prime Numbers',
                type: 'article',
                route: 'primes',
                description: 'Sieve of Eratosthenes and primality tests.'
            },
            {
                id: 'union-find',
                title: 'Union-Find',
                type: 'visualizer',
                description: 'Disjoint set data structures.'
            }
        ]
    }
};

export const getTopicsList = () => {
    return Object.values(CURRICULUM).map(topic => {
        const subIds = topic.subtopics.map(s => s.id);
        return {
            ...topic,
            progress: ProgressService.getTopicProgress(subIds),
            subtopics: topic.subtopics.map(sub => ({
                ...sub,
                isCompleted: ProgressService.isCompleted(sub.id)
            }))
        };
    });
};
