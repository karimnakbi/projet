const express = require('express');
const { addProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/productControllers');

const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', addProduct);
router.get('/', getProducts);
router.put('/:prodId', updateProduct);
router.delete('/:prodId', deleteProduct);
module.exports = router;