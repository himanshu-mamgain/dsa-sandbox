import { Topic } from "../concepts/curriculum";

import { PageLayout } from "../components/layout";

export const renderTopicDetail = (topic: Topic) => PageLayout(`
    <header style="text-align: left; margin-bottom: 3rem;">
        <h1>${topic.title}</h1>
        <p class="intro-text" style="margin-bottom: 2rem;">${topic.description}</p>
        
        <div class="progress-section" style="max-width: 300px;">
            <div class="progress-info">
            <span>Total Progress</span>
            <span>${topic.progress || 0}%</span>
            </div>
            <div class="progress-bar">
            <div class="progress-fill" style="width: ${topic.progress || 0}%"></div>
            </div>
        </div>
    </header>

    <div class="subtopics-list">
        <h2 style="margin-bottom: 2rem;">Modules</h2>
        <div class="topic-grid" style="padding: 0; justify-content: flex-start;">
            ${topic.subtopics.map(sub => `
                <div class="topic-card" 
                        onclick="location.hash = '${sub.route || ''}'"
                        style="cursor: ${sub.route ? 'pointer' : 'default'}; min-width: 300px;">
                    <div class="card-header" style="justify-content: space-between; display: flex;">
                        <span style="
                            font-size: 0.8rem; 
                            background: rgba(255,255,255,0.1); 
                            padding: 0.2rem 0.6rem; 
                            border-radius: 1rem; 
                            color: var(--subtext-color);
                            border: 1px solid var(--glass-border);
                            text-transform: uppercase;
                        ">${sub.type}</span>
                        ${sub.isCompleted ? '<span style="color: #10b981;">Completed ✅</span>' : ''}
                    </div>
                    <h3 style="margin: 1rem 0 0.5rem 0; font-size: 1.4rem;">${sub.title}</h3>
                    <p style="color: var(--subtext-color); font-size: 0.95rem; line-height: 1.5;">${sub.description || 'Start learning...'}</p>
                    
                    ${sub.route ? `
                    <div style="margin-top: auto; padding-top: 1.5rem; display: flex; align-items: center; color: var(--primary-color); font-weight: 600;">
                        Start Module <span style="margin-left: 0.5rem;">→</span>
                    </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    </div>
`);
