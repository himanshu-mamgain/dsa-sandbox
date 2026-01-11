export interface TestCase {
    input: any[];
    expected: any;
    description?: string;
}

export interface SubTopicTests {
    [subTopicId: string]: TestCase[];
}

export interface TopicTests {
    [topicId: string]: SubTopicTests;
}
