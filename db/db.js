const mysql = require("mysql");
//create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "table1",
});

module.exports = conn;
