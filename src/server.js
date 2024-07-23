require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

//config template engine
// config static file
configViewEngine(app);
app.use('/', webRoutes);
//test db connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// A simple SELECT query
connection.query(
  'SELECT customerName FROM `customers`',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})