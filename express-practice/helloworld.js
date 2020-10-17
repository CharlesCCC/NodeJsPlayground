const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST~~~');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// This responds a POST request for the homepage
