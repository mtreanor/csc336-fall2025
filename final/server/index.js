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


app.use(express.json());
// app.use(cors());

app.get("/api/llm", async (req, res) => {
    let songs = [];
    try {
        let fileContents = fs.readFileSync("songs.json", "utf-8");
        songs = JSON.parse(fileContents);
    } catch (error) {
        console.log("ERROR: fs.readFileSync threw an error. 'songs.json' doesn't exist.");
    }

    if (songs.length === 0 || req.query["refresh"] === "true") {

        let prompt = "Give me a list of 10 beatles songs. Include one that isn't real. Only include the song titles in the list, and do not number the songs in the list. Put each title on a separate line.";
        const llmResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        songs = llmResponse.text.split("\n");
        console.log(songs);

        fs.writeFileSync("songs.json", JSON.stringify(songs));
    }

    res.json(songs)
})

app.use(express.static("./public"));

app.listen(3000);