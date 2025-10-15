import express from "express";

// Create an instance of the express server
const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/api/randomNumber", (req, res) => {
    console.log(req.method);
    res.send(Math.random());
});

app.post("/api/add", (req, res) => {
    console.log(req.body);

    req.body.name += "!!!";

    res.json(req.body);
});

app.listen(3000);