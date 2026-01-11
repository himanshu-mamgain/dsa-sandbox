export interface UserProfile {
    preferredLanguage: string;
    solutionsPath: string;
}

const STORAGE_KEY = 'dsa_user_profile';

const DEFAULT_PROFILE: UserProfile = {
    preferredLanguage: 'java',
    solutionsPath: ''
};

export class ProfileService {
    static getProfile(): UserProfile {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return { ...DEFAULT_PROFILE };
            return JSON.parse(stored);
        } catch (e) {
            console.warn('Failed to load profile', e);
            return { ...DEFAULT_PROFILE };
        }
    }

    static saveProfile(profile: UserProfile): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
        } catch (e) {
            console.error('Failed to save profile', e);
        }
    }

    static getPreferredLanguage(): string {
        return this.getProfile().preferredLanguage;
    }
}
