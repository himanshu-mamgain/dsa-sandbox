export class ProgressService {
    private static STORAGE_KEY = 'dsa_progress';

    static getCompletedIds(): string[] {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    static markComplete(id: string): void {
        const ids = this.getCompletedIds();
        if (!ids.includes(id)) {
            ids.push(id);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
        }
    }

    static isCompleted(id: string): boolean {
        return this.getCompletedIds().includes(id);
    }

    static getTopicProgress(subtopicIds: string[]): number {
        if (subtopicIds.length === 0) return 0;
        const completedCount = subtopicIds.filter(id => this.isCompleted(id)).length;
        return Math.round((completedCount / subtopicIds.length) * 100);
    }
}
