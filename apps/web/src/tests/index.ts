import { TopicTests } from './types';
import { miscellaneousTests } from './miscellaneous';

// Registry of all tests
export const ALL_TESTS: TopicTests = {
    'miscellaneous': miscellaneousTests,

    // Placeholders for future topics
    'arrays': {},
    'linked-list': {},
    'recursion': {},
    'sorting-searching': {},
    'trees': {},
    'graphs': {},
    'dp': {},
    'stacks-queues': {},
    'hashing': {},
    'greedy': {}
};

export const getTestsForSubTopic = (topicId: string, subTopicId: string) => {
    return ALL_TESTS[topicId]?.[subTopicId] || [];
};
