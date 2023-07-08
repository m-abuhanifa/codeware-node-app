import express from "express";
import { createOrderItems, createOrders } from "../controllers/orderController";
const router = express.Router();

router.route("/items").post(createOrderItems);

router.route("/").post(createOrders);

export default router;
