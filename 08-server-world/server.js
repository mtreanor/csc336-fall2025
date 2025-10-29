import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();



app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/world", (req, res) => {
    let world;
    try {
        let fileContents = fs.readFileSync("./world.json", "utf-8");
        world = JSON.parse(fileContents);
    } catch (error) {
        console.log("ERROR: fs.readFileSync threw an error. 'world.json' doesn't exist.");
    }

    console.log(world.regions[0].name);
    world.regions.push({name:TESTING});

    res.json(world);
});

app.listen(3000);