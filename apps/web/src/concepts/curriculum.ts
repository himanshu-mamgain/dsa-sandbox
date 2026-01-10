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
        title: 'What is DSA?',
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
        title: 'Analysis of Algorithms',
        description: 'Learn to measure the efficiency of your code.',
        subtopics: [
            {
                id: 'big-o',
                title: 'Big O Notation',
                type: 'article',
                route: 'big-o',
                description: 'Understanding asymptotic analysis and growth rates.'
            },
            {
                id: 'time-complexity',
                title: 'Time Complexity',
                type: 'article',
                route: 'time-complexity',
                description: 'Visualize how execution time grows with input size.'
            },
            {
                id: 'space-complexity',
                title: 'Space Complexity',
                type: 'article',
                route: 'space-complexity',
                description: 'Memory usage trade-offs in algorithm design.'
            }
        ]
    },
    'linked-list': {
        id: 'linked-list',
        title: 'Linked List',
        description: 'Linear data structures where elements are linked using pointers.',
        subtopics: [
            {
                id: 'singly-ll',
                title: 'Singly Linked List',
                type: 'visualizer',
                description: 'Basic node linking.'
            },
            {
                id: 'doubly-ll',
                title: 'Doubly Linked List (Music Playlist)',
                type: 'visualizer',
                description: 'Build a Spotify-like playlist using bidirectional nodes.',
                route: 'playlist',
            },
            {
                id: 'circular-ll',
                title: 'Circular Lists',
                type: 'visualizer',
                description: 'Loops and ring buffers.'
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
