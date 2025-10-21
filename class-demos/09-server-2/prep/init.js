// init.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = await open({
  filename: './world.db',
  driver: sqlite3.Database
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    population INTEGER
  )
`);

await db.exec(`
  INSERT INTO cities (name, country, population)
  VALUES
    ('Tokyo', 'Japan', 37435191),
    ('Paris', 'France', 11020000),
    ('Cairo', 'Egypt', 9500000)
`);

console.log('✅ Database initialized');
await db.close();
