// server.js
import express from "express";
// import cors from "cors";

const app = express();
const PORT = 3000;

// Optional: enable CORS if you call this API from a different origin
// app.use(cors());
app.use(express.json()); // parse JSON request bodies

// Serve static frontend files from ./public
app.use(express.static("public"));

// In-memory data store (simple for demo)
let todos = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Walk the dog", done: false },
  { id: 3, text: "Write lecture notes", done: true }
];

// Helper to create new id (simple)
function nextId() {
  let max = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > max) max = todos[i].id;
  }
  return max + 1;
}

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json({ todos: todos });
});

// POST create a todo
app.post("/api/todos", (req, res) => {
  const text = req.body && req.body.text ? String(req.body.text) : "";
  if (text.trim() === "") {
    res.status(400).json({ error: "Text required" });
    return;
  }
  const newTodo = { id: nextId(), text: text, done: false };
  todos.push(newTodo);
  res.status(201).json({ todo: newTodo });
});

// PUT toggle done
app.put("/api/todos/:id/toggle", (req, res) => {
  const id = Number(req.params.id);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].done = !todos[i].done;
      res.json({ todo: todos[i] });
      return;
    }
  }
  res.status(404).json({ error: "Not found" });
});

// DELETE a todo
app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  let foundIndex = -1;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex === -1) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  // remove the todo
  const removed = todos.splice(foundIndex, 1)[0];
  res.json({ todo: removed });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
