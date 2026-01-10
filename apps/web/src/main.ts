import './style.css';
import { getTopicsList } from './concepts/curriculum';

import { RoadmapView } from './views/intro/roadmap';
import { DefinitionView } from './views/intro/definition';
import { ImportanceView } from './views/intro/importance';
import { BigOView } from './views/analysis/big-o';
import { TimeComplexityView } from './views/analysis/time-complexity';
import { SpaceComplexityView } from './views/analysis/space-complexity';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
}

const API_URL = 'http://localhost:3000';

// ... (fetchPlaylist and other API calls remain the same) ...

import { ProgressService } from './lib/progress';

// ... (render functions) ...

function attachCompletionListener() {
  const btn = document.getElementById('mark-complete-btn');
  if (!btn) return;

  const id = btn.getAttribute('data-id');
  if (!id) return;

  // Check initial state
  if (ProgressService.isCompleted(id)) {
    btn.classList.add('completed');
    btn.textContent = 'Completed ✅';
    (btn as HTMLButtonElement).disabled = true;
  }

  btn.addEventListener('click', () => {
    ProgressService.markComplete(id);
    btn.classList.add('completed');
    btn.textContent = 'Completed ✅';
    (btn as HTMLButtonElement).disabled = true;

    // Optional: Confetti or sound here
  });
}

function renderRoadmap() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = RoadmapView;
  attachCompletionListener();
}

function renderDefinition() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = DefinitionView;
  attachCompletionListener();
}

function renderImportance() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = ImportanceView;
  attachCompletionListener();
}





function renderBigO() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = BigOView;
  attachCompletionListener();
}

function renderTimeComplexity() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = TimeComplexityView;
  attachCompletionListener();
}

function renderSpaceComplexity() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = SpaceComplexityView;
  attachCompletionListener();
}

function renderAnalysis() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    <button class="back-button" onclick="location.hash = ''">
      <span>←</span> Back to Dashboard
    </button>
    <div class="content-container">
        <h1>Analysis of Algorithms</h1>
        <p>Coming Soon: Interactive Big O Visualizer</p>
    </div>
   `;
}


async function fetchPlaylist() {
  try {
    const res = await fetch(`${API_URL}/playlist`);
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (e) {
    console.warn("Backend might be down, returning empty list", e);
    return [
      { id: '1', title: 'Demo Song 1', artist: 'Artist A', duration: 200 },
      { id: '2', title: 'Demo Song 2', artist: 'Artist B', duration: 180 }
    ]; // Fallback data if backend is down
  }
}

async function playNext() {
  try {
    const res = await fetch(`${API_URL}/playlist/next`);
    return await res.json();
  } catch { return { playing: null }; }
}

async function playPrev() {
  try {
    const res = await fetch(`${API_URL}/playlist/prev`);
    return await res.json();
  } catch { return { playing: null }; }
}

async function getAIExplanation(concept: string) {
  try {
    const res = await fetch(`${API_URL}/ai/explain/${concept}`);
    if (!res.ok) throw new Error('AI Error');
    const data = await res.json();
    return data.explanation;
  } catch {
    return "AI service is currently offline. Ensure the API is running.";
  }
}

function renderDashboard() {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  // Re-fetch topics to get latest progress
  const currentTopics = getTopicsList();

  const dashboardHtml = `
    <div class="dashboard">
      <header>
        <h1>DSA By Doing</h1>
        <div class="subtitle">Learn by building real-world systems.</div>
      </header>
      
      <div class="topic-grid">
        ${currentTopics.map(topic => `
          <div class="topic-card" onclick="location.hash = 'topic/${topic.id}'">
            <div class="card-header">
              <h2>${topic.title}</h2>
            </div>
            
            <p style="color: var(--subtext-color); margin-top: 1rem; line-height: 1.6;">
                ${topic.description}
            </p>
            
            <div class="subtopics" style="margin-top: 1rem;">
                <span style="color: var(--subtext-color); font-size: 0.9rem;">
                    ${topic.subtopics.length} Modules
                </span>
            </div>
            
            <div class="progress-section">
              <div class="progress-info">
                <span>Progress</span>
                <span>${topic.progress}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="--progress: ${topic.progress}%"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  app.innerHTML = dashboardHtml;
}


async function renderPlaylist() {
  const songs: Song[] = await fetchPlaylist();
  const app = document.querySelector<HTMLDivElement>('#app')!;

  const visualizerHtml = `
    <button class="back-button" onclick="location.hash = ''">
      <span>←</span> Back to Dashboard
    </button>
    <div class="visualizer-container">
      <div class="visualizer-section">
        <h1>Doubly Linked List Visualizer</h1>
        <div class="node-container" id="node-container">
          ${songs.map((song, index) => `
            <div class="node" data-id="${song.id}">
              <div class="node-title">${song.title}</div>
              <div class="node-artist">${song.artist}</div>
            </div>
            ${index < songs.length - 1 ? '<div class="arrow">⇄</div>' : ''}
          `).join('')}
        </div>
      </div>
      
      <div class="controls-section">
        <h2>Music Player</h2>
        <div class="player-controls">
           <button id="prevBtn" class="secondary-btn">Prev</button>
           <button id="playBtn">Play / Pause</button>
           <button id="nextBtn" class="secondary-btn">Next</button>
        </div>
        
        <div class="ai-hint" id="ai-hint">
            Loading AI insight...
        </div>
      </div>
    </div>
  `;

  app.innerHTML = visualizerHtml;

  // Attach listeners
  document.getElementById('prevBtn')?.addEventListener('click', async () => {
    const data = await playPrev();
    if (data.playing) highlightNode(data.playing.id);
  });

  document.getElementById('nextBtn')?.addEventListener('click', async () => {
    const data = await playNext();
    if (data.playing) highlightNode(data.playing.id);
  });

  const explanation = await getAIExplanation('DoublyLinkedList');
  const aiHint = document.getElementById('ai-hint');
  if (aiHint) aiHint.textContent = explanation;
}

function highlightNode(id: string) {
  document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
  const node = document.querySelector(`.node[data-id="${id}"]`);
  if (node) {
    node.classList.add('active');
    node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
}

import { renderTopicDetail } from './views/topic-detail';

function router() {
  const hash = window.location.hash.replace('#', '');

  if (hash.startsWith('topic/')) {
    const topicId = hash.split('/')[1];
    // Refresh topicsList to ensure latest progress
    const currentTopics = getTopicsList();
    const topic = currentTopics.find(t => t.id === topicId);
    if (topic) {
      const app = document.querySelector<HTMLDivElement>('#app')!;
      app.innerHTML = renderTopicDetail(topic);
    }
  } else if (hash === 'playlist') {
    renderPlaylist();
  } else if (hash === 'roadmap') {
    renderRoadmap();
  } else if (hash === 'definition') {
    renderDefinition();
  } else if (hash === 'importance') {
    renderImportance();
  } else if (hash === 'analysis') {
    renderAnalysis();
  } else if (hash === 'big-o') {
    renderBigO();
  } else if (hash === 'time-complexity') {
    renderTimeComplexity();
  } else if (hash === 'space-complexity') {
    renderSpaceComplexity();
  } else {
    renderDashboard();
  }
}

// Initial Load
window.addEventListener('hashchange', router);
window.addEventListener('load', async () => {
  await ProgressService.init();
  router();
});

