const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const conn = require("./db/db");

//show all products
app.get("/api/products", (req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});

//show single product
app.get("/api/products/:id", (req, res) => {
  let sql = "SELECT * FROM product WHERE product_id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify(results));
  });
});
