import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items';
import healthRouter from './routes/health';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRouter);
app.use('/api/items', itemsRouter);

export default app;