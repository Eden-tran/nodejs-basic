require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', './src/views/');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  res.render('sample.ejs');
})
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})