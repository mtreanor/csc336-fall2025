import express from 'express';
import fs from "fs";

const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(express.static("public"));

app.use(requestTime)

app.get('/test', (req, res) => {
  let times = [];

  try {
    let fileContents = fs.readFileSync("times.json", "utf-8");
    times = JSON.parse(fileContents);
  } catch (error) {
    console.log("ERROR: fs.readFileSync threw an error. 'program_count.txt' doesn't exist.");
  }

  times.push(Date.now());

  fs.writeFileSync("times.json", JSON.stringify(times));

  res.json(times)
})

app.listen(3000);
