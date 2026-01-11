import express from 'express';
import cors from 'cors';
import { Playlist, Song } from '@dsa-by-doing/dsa';
import { AIConnector } from '@dsa-by-doing/ai';

import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

const DATA_DIR = path.join(__dirname, '../../../local_data');
const PROGRESS_FILE = path.join(DATA_DIR, 'progress.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load progress helper
const loadProgress = (): string[] => {
    try {
        if (fs.existsSync(PROGRESS_FILE)) {
            const data = fs.readFileSync(PROGRESS_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error("Error reading progress:", e);
    }
    return [];
};

// Save progress helper
const saveProgress = (ids: string[]) => {
    try {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(ids, null, 2));
    } catch (e) {
        console.error("Error writing progress:", e);
    }
};

app.use(cors());
app.use(express.json());

const playlist = new Playlist();
const ai = new AIConnector();

// Seed some data
playlist.append({ id: '1', title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 });
playlist.append({ id: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: 482 });
playlist.append({ id: '3', title: 'Hotel California', artist: 'Eagles', duration: 390 });

app.get('/playlist', (req, res) => {
    res.json(playlist.toArray());
});

app.post('/playlist/add', (req, res) => {
    const song: Song = req.body;
    playlist.append(song);
    res.status(201).json(song);
});

app.get('/playlist/play/:id?', (req, res) => {
    const id = req.params.id;
    const song = playlist.play(id);
    res.json({ playing: song });
});

app.get('/playlist/next', (req, res) => {
    const song = playlist.next();
    res.json({ playing: song });
});

app.get('/playlist/prev', (req, res) => {
    const song = playlist.prev();
    res.json({ playing: song });
});

app.get('/ai/explain/:concept', async (req, res) => {
    const explanation = await ai.explainConcept(req.params.concept);
    res.json({ explanation });
});

// Progress Endpoints
app.get('/progress', (req, res) => {
    res.json(loadProgress());
});

app.post('/progress', (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).send("Missing ID");

    const current = loadProgress();
    if (!current.includes(id)) {
        current.push(id);
        saveProgress(current);
    }
    res.json(current);
});

app.post('/files/save', (req, res) => {
    const { path: filePath, content } = req.body;
    if (!filePath || content === undefined) {
        return res.status(400).json({ error: 'Missing path or content' });
    }

    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, content);
        res.json({ success: true, path: filePath });
    } catch (e) {
        console.error("Save error:", e);
        res.status(500).json({ error: 'Failed to write file' });
    }
});

app.listen(port, () => {
    console.log(`DSA API listening at http://localhost:${port}`);
});
