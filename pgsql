ultimate-sports-web/
├─ backend/
│   ├─ server.js
│   └─ .env          <-- 6c273cc8e6be0d89e5ab1f72d47a49e5
└─ frontend/
    └─ index.html    <-- 6c273cc8e6be0d89e5ab1f72d47a49e5
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // loads your API key from .env

const app = express();
app.use(cors());
app.use(express.json());

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
        model: "gpt-5-mini",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));

OPENAI_API_KEY=  <-- 6c273cc8e6be0d89e5ab1f72d47a49e5 

cd backend
npm init -y
npm install express node-fetch cors dotenv

node server.js
