import express from 'express';
const app = express()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(express.static("public"));

app.use(requestTime)

app.get('/test', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(responseText)
})

app.listen(3000);