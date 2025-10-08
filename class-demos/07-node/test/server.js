import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/time", (req, res) => {
  res.send(`The current time is ${new Date().toLocaleTimeString()}`);
});

app.get("/data", (req, res) => {
  res.json({ user: "Alice", mood: "curious" });
});


/*
What REST Means

REST = REpresentational State Transfer. Key ideas:

Resources: Every piece of data you expose is considered a “resource” (e.g., /users, /posts).

HTTP Methods: You use standard HTTP verbs:

GET → retrieve data
POST → create new resource
PUT or PATCH → update resource
DELETE → remove resource

Stateless: Each request contains all the info the server needs to process it.

Structured URLs: Path naming should reflect resources, not actions (e.g., /users/123 instead of /getUser?id=123).
*/