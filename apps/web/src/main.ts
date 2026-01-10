import './style.css';

interface Song {
    id: string;
    title: string;
    artist: string;
    duration: number;
}

const API_URL = 'http://localhost:3000';

async function fetchPlaylist() {
    const res = await fetch(`${API_URL}/playlist`);
    return await res.json();
}

async function playNext() {
    const res = await fetch(`${API_URL}/playlist/next`);
    return await res.json();
}

async function playPrev() {
    const res = await fetch(`${API_URL}/playlist/prev`);
    return await res.json();
}

async function getAIExplanation() {
    const res = await fetch(`${API_URL}/ai/explain/DoublyLinkedList`);
    const data = await res.json();
    return data.explanation;
}

async function render() {
    const songs: Song[] = await fetchPlaylist();
    // Fetch currently playing state if we had one, for now assume first or just rendered list

    const app = document.querySelector<HTMLDivElement>('#app')!;

    const visualizerHtml = `
    <div class="container">
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

    const explanation = await getAIExplanation();
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

render();
