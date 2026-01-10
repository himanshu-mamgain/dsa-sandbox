"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dsa_1 = require("@dsa-by-doing/dsa");
const ai_1 = require("@dsa-by-doing/ai");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const playlist = new dsa_1.Playlist();
const ai = new ai_1.AIConnector();
// Seed some data
playlist.append({ id: '1', title: 'Bohemian Rhapsody', artist: 'Queen', duration: 354 });
playlist.append({ id: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: 482 });
playlist.append({ id: '3', title: 'Hotel California', artist: 'Eagles', duration: 390 });
app.get('/playlist', (req, res) => {
    res.json(playlist.toArray());
});
app.post('/playlist/add', (req, res) => {
    const song = req.body;
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
