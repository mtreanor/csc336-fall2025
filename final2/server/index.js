import express from "express";
import cors from "cors";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/api/data", (req, res) => {
    console.log("hello from api endpoint /api/data!");
    res.json({
        something: 123456789
    });
});

app.listen(3000);