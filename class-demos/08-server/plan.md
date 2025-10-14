## Array functions

## http
- Header
- Body
- [Response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- Create, Read, Update, Delete -> POST, GET, PUT, DELETE
- Without express:
```js
import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/style.css") {
    fs.readFile("./style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000);
```
- With express:
```js
import express from "express";
const app = express();
app.use(express.static("public"));
```
- Passing information into the server:
    - Query: 
        - req.query 
            - /test?foo=true
    - Params: 
        - req.params.thing
            - /test/:thing in the route, and /test/thingValue in the url.
    - Passing in JSON
        - app.use(express.json());
