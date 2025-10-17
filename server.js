import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const leagueMapping = {
  'EPL': { id: 39, name: 'Premier League', season: 2023 },
  'LaLiga': { id: 140, name: 'La Liga', season: 2023 },
  'SerieA': { id: 135, name: 'Serie A', season: 2023 },
  'Bundesliga': { id: 78, name: 'Bundesliga', season: 2023 },
  'Ligue1': { id: 61, name: 'Ligue 1', season: 2023 },
  'ChampionsLeague': { id: 2, name: 'UEFA Champions League', season: 2023 },
  'WorldCup': { id: 1, name: 'FIFA World Cup', season: 2022 }
};

app.get('/api/standings/:leagueKey', async (req, res) => {
  const { leagueKey } = req.params;
  const league = leagueMapping[leagueKey];

  if (!league) {
    return res.status(404).json({ error: 'League not found' });
  }

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?season=${league.season}&league=${league.id}`,
      {
        headers: {
          'x-apisports-key': process.env.FOOTBALL_API_KEY
        }
      }
    );

    const data = await response.json();
    
    if (data.response && data.response.length > 0) {
      res.json({
        league: league.name,
        standings: data.response[0].league.standings[0]
      });
    } else {
      res.status(404).json({ error: 'No standings data available' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://0.0.0.0:${PORT}`));
