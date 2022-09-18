const router = require("express").Router();

const {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProduct,
} = require("../controllers/products");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/addproduct", addProduct);

router.put("/updateproduct/:id", updateProduct);

router.delete("/deleteproducts/:id", deleteProduct);

module.exports = router;
