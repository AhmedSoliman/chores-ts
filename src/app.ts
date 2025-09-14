import express from 'express';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const app = express();
app.use(express.json());

const tasks: Task[] = [];

app.get('/tasks', (_req, res) => {
  res.json(tasks);
});

export default app;
