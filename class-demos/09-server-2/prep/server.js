// server.js
import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
app.use(express.json()); // parse JSON bodies

// open DB connection (single shared instance)
const db = await open({
  filename: './world.db',
  driver: sqlite3.Database
});

// GET all cities
app.get('/cities', async (req, res) => {
  const cities = await db.all('SELECT * FROM cities');
  res.json(cities);
});

// GET one city by id
app.get('/cities/:id', async (req, res) => {
  const city = await db.get('SELECT * FROM cities WHERE id = ?', [req.params.id]);
  if (!city) {
    res.status(404).json({ error: 'City not found' });
  } else {
    res.json(city);
  }
});

// POST new city
app.post('/cities', async (req, res) => {
  const { name, country, population } = req.body;
  if (!name || !country || !population) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const result = await db.run(
    'INSERT INTO cities (name, country, population) VALUES (?, ?, ?)',
    [name, country, population]
  );

  const newCity = await db.get('SELECT * FROM cities WHERE id = ?', [result.lastID]);
  res.status(201).json(newCity);
});

// PUT (update) city population
app.put('/cities/:id', async (req, res) => {
  const { population } = req.body;
  if (population === undefined) {
    return res.status(400).json({ error: 'Population required' });
  }

  await db.run('UPDATE cities SET population = ? WHERE id = ?', [
    population,
    req.params.id
  ]);

  const updated = await db.get('SELECT * FROM cities WHERE id = ?', [req.params.id]);
  res.json(updated);
});

// DELETE a city
app.delete('/cities/:id', async (req, res) => {
  await db.run('DELETE FROM cities WHERE id = ?', [req.params.id]);
  res.json({ message: 'City deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
