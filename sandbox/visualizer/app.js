const state = {
    view: 'dashboard', // dashboard | settings | problem
    config: {
        solutionsDir: '../user-solutions',
        language: 'java'
    }
};

const views = {
    dashboard: document.getElementById('dashboard-view'),
    settings: document.getElementById('settings-view'), // We will add this to HTML
    problem: document.getElementById('problem-view')    // We will add this to HTML
};

function switchView(viewName) {
    // Hide all
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    
    // Show specific
    const target = document.getElementById(`${viewName}-view`);
    if (target) {
        target.classList.add('active');
        state.view = viewName;
    }
}

// Init
document.getElementById('settings-btn').addEventListener('click', () => {
    switchView('settings');
});

// Mock Data Load (would likely fetch from file system via a local server in real dev, or just static json)
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log("Opening problem...");
        // Logic to load problem details
        switchView('problem');
    });
});

// Settings Form Logic
const saveSettingsBtn = document.getElementById('save-settings');
if(saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
        const dirInput = document.getElementById('solutions-dir');
        if(dirInput) state.config.solutionsDir = dirInput.value;
        alert('Settings saved (locally in session).');
        switchView('dashboard');
    });
}
