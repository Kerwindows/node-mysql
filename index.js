const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

// parse application/json
app.use(bodyParser.json());

const productRouter = require("./routes/products");

app.use("/product", productRouter);

//Server listening
app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
