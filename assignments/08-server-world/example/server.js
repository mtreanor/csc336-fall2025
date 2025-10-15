import express from "express";
import fs from "fs";

const app = express();

// This line will make it so the node server will make the "front end" (html, css, js)
// is served by the server. No more Live-server!
app.use(express.static("./public"));

// This line helps us process requests that contain json (e.g. in the '/excite' 
// route req.data is automatically json because of this)
app.use(express.json());

app.get("/world", async (req, res) => {
    // Read in the data, parse it into an object and send it over as json to the client
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});

app.post("/excite", async (req, res) => {
    // Read the file that contains all of the world info
    const worldData = await fs.readFileSync("./world.json", "utf-8");
    // As readFile brought in the data as a string, parse it into a JS object.
    const world = JSON.parse(worldData);

    // req.body is the json object sent to us from the client. 
    // NOTE: it was parsed automatically by express (that's what the app.use(express.json()); does above)
    const personToAddExcitementTo = req.body;
    
    // Find the person in one of the regions or cities, and add excitement to their name!
    for (let region of world.regions) {
        for (let city of region.towns) {
            for (let person of city.notable_people) {
                if (person.name === personToAddExcitementTo.name) {
                    person.name += "!!!";
                }
            }
        }
    }

    // Write it back to file
    await fs.writeFileSync("world.json", JSON.stringify(world, null, 2));

    // Now that we've modified the world data, and written it back to file
    // send it back to the client.
    res.json(world);
});

app.listen(3000, () => console.log("Server running on http://localhost:3001"));