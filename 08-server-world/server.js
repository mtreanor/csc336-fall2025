import express from "express";
import fs from "fs";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.post("/llm", async (req, res) => {
    let prompt = req.body.prompt;

    const llmResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    res.json({llm:llmResponse.text})
})

app.get("/world", (req, res) => {
    let world;
    try {
        let fileContents = fs.readFileSync("./world.json", "utf-8");
        world = JSON.parse(fileContents);
    } catch (error) {
        console.log("ERROR: fs.readFileSync threw an error. 'world.json' doesn't exist.");
    }

    console.log(world.regions[0].name);

    res.json(world);
});

app.listen(3000);