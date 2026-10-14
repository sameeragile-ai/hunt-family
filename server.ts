import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import chatHandler from './api/chat';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Route for AI Chatbot
  app.post('/api/chat', async (req, res) => {
    try {
      await chatHandler(req, res);
    } catch (err: any) {
      console.error('Server error in /api/chat:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', clinic: 'Hunt Family Dentistry', port: PORT });
  });

  // In production, serve dist folder; in dev, attach Vite middleware
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Hunt Family Dentistry server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
