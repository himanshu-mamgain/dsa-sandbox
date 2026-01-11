import { SubTopicTests } from './types';

export const miscellaneousTests: SubTopicTests = {
    'count-digits': [
        { input: [12345], expected: 5, description: 'Standard positive integer' },
        { input: [7], expected: 1, description: 'Single digit' },
        { input: [0], expected: 1, description: 'Zero has 1 digit' }
    ],
    'palindrome': [
        { input: [121], expected: true, description: 'Odd length palindrome' },
        { input: [1221], expected: true, description: 'Even length palindrome' },
        { input: [123], expected: false, description: 'Not a palindrome' },
        { input: [-121], expected: false, description: 'Negative numbers are not palindromes' }
    ],
    'factorial': [
        { input: [5], expected: 120, description: 'Factorial of 5' },
        { input: [0], expected: 1, description: 'Factorial of 0 is 1' },
        { input: [1], expected: 1, description: 'Factorial of 1 is 1' }
    ],
    'gcd-lcm': [
        { input: [12, 15], expected: { gcd: 3, lcm: 60 }, description: 'Standard pair' },
        { input: [7, 13], expected: { gcd: 1, lcm: 91 }, description: 'Prime numbers' }
    ],
    'check-kth-bit': [
        { input: [5, 0], expected: true, description: '5 is 101, 0th bit is 1 (True)' }, // 101
        { input: [5, 1], expected: false, description: '5 is 101, 1st bit is 0 (False)' },
        { input: [5, 2], expected: true, description: '5 is 101, 2nd bit is 1 (True)' }
    ],
    'count-set-bits': [
        { input: [5], expected: 2, description: '5 is 101' },
        { input: [7], expected: 3, description: '7 is 111' },
        { input: [0], expected: 0, description: '0 is 0' }
    ],
    'power-of-two': [
        { input: [1], expected: true, description: '2^0 = 1' },
        { input: [2], expected: true, description: '2^1 = 2' },
        { input: [4], expected: true, description: '2^2 = 4' },
        { input: [6], expected: false, description: '6 is not power of 2' }
    ],
    'one-odd-occurring': [
        { input: [[4, 3, 4, 4, 4, 5, 5]], expected: 3, description: '3 appears once' },
        { input: [[1, 1, 2]], expected: 2, description: '2 appears once' }
    ],
    'math-primes': [
        { input: [2], expected: true, description: '2 is prime' },
        { input: [4], expected: false, description: '4 is not prime' },
        { input: [17], expected: true, description: '17 is prime' }
    ]
};
