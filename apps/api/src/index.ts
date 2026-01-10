import express from 'express';
import cors from 'cors';
import { Playlist, Song } from '@dsa-by-doing/dsa';
import { AIConnector } from '@dsa-by-doing/ai';

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`DSA API listening at http://localhost:${port}`);
});
