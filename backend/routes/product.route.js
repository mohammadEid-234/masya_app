import express from "express"
import { addNewProduct, getAllProducts, getProudctById } from "../controller/product.controller.js";
const router = express.Router();
router.get("/",getAllProducts)
router.get("/:id",getProudctById)
router.post("/",addNewProduct)

export default router;