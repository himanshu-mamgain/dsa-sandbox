const API_URL = 'http://localhost:3000';

export class ProgressService {
    private static cache: string[] = [];
    private static initialized = false;

    static async init() {
        if (this.initialized) return;
        try {
            const res = await fetch(`${API_URL}/progress`);
            if (res.ok) {
                this.cache = await res.json();
            }
        } catch (e) {
            console.warn("Failed to sync progress with server, using local cache", e);
            // Fallback to local storage if server fails
            const stored = localStorage.getItem('dsa_progress_backup');
            if (stored) this.cache = JSON.parse(stored);
        }
        this.initialized = true;
    }

    static async markComplete(id: string): Promise<void> {
        // Optimistic update
        if (!this.cache.includes(id)) {
            this.cache.push(id);
            // Backup locally just in case
            localStorage.setItem('dsa_progress_backup', JSON.stringify(this.cache));
        }

        try {
            await fetch(`${API_URL}/progress`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
        } catch (e) {
            console.error("Failed to save progress to server", e);
        }
    }

    static isCompleted(id: string): boolean {
        return this.cache.includes(id);
    }

    static getTopicProgress(subtopicIds: string[]): number {
        if (subtopicIds.length === 0) return 0;
        const completedCount = subtopicIds.filter(id => this.isCompleted(id)).length;
        return Math.round((completedCount / subtopicIds.length) * 100);
    }
}

