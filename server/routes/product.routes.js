import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductsByCategory, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/create", createProduct)
router.get("/all", getAllProducts)
router.delete("/del/:id", deleteProduct)
router.put("/update/:id", updateProduct)
router.get("/get/:id", getProductById)
router.put("/getProByCat/:category", getProductsByCategory)

export default router;