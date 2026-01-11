import { ProfileService } from "../lib/profile";
import { PageLayout } from "../components/layout";

export const ProfileView = PageLayout(`
    <header style="text-align: left; margin-bottom: 3rem;">
        <h1>My Profile</h1>
        <p class="intro-text">Customize your learning experience and default settings.</p>
    </header>

    <div class="form-container" style="max-width: 600px; background: var(--surface-color); padding: 2rem; border-radius: 1rem; border: 1px solid var(--glass-border);">
        <form id="profile-form">
            <div class="form-group">
                <label class="form-label" for="preferred-language">Preferred Language</label>
                <select class="form-select" id="preferred-language">
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                </select>
                <p style="font-size: 0.8rem; color: var(--subtext-color); margin-top: 0.5rem;">
                    This will be selected by default in the code editor.
                </p>
            </div>

            <div class="form-group">
                <label class="form-label" for="default-path">Default Solutions Path</label>
                <input type="text" class="form-input" id="default-path" placeholder="e.g., C:/Users/Name/DSA-Solutions">
                <p style="font-size: 0.8rem; color: var(--subtext-color); margin-top: 0.5rem;">
                    Local folder where your solutions will be saved (Optional).
                </p>
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button type="submit" class="primary-btn">Save Changes</button>
            </div>
        </form>
    </div>
`);

export function setupProfileListeners() {
    const form = document.getElementById('profile-form') as HTMLFormElement;
    const langSelect = document.getElementById('preferred-language') as HTMLSelectElement;
    const pathInput = document.getElementById('default-path') as HTMLInputElement;

    if (!form || !langSelect || !pathInput) return;

    // Load current values
    const profile = ProfileService.getProfile();
    langSelect.value = profile.preferredLanguage;
    pathInput.value = profile.solutionsPath;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        ProfileService.saveProfile({
            preferredLanguage: langSelect.value,
            solutionsPath: pathInput.value
        });

        // Show simple feedback
        const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = btn.textContent;
        btn.textContent = 'Saved! ✅';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
}
