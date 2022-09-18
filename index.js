const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

//show all products
// app.get("/api/products", (req, res) => {
//   let sql = "SELECT * FROM product";
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify(results));
//   });
// });

//show single product
// app.get("/api/products/:id", (req, res) => {
//   let sql = "SELECT * FROM product WHERE product_id=" + req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify(results));
//   });
// });

// //add new product
// app.post("/api/products", (req, res) => {
//   let data = {
//     product_name: req.body.product_name,
//     product_price: req.body.product_price,
//   };
//   let sql = "INSERT INTO product SET ?";
//   let query = conn.query(sql, data, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify(results));
//   });
// });

//update product


//Server listening
app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
