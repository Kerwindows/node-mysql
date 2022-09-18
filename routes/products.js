const router = require('express').Router();

const { getAllProducts, addProduct, deleteProduct, getProductById, updateProduct } = require('../contollers/products');

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/api/products', addProduct);

router.put('/api/products/:id', updateProduct);

router.delete('/api/products/:id', deleteProduct)

module.exports = router;
