import express from "express";
import {
  createOrderItems,
  createOrders,
  getOrders,
} from "../controllers/orderController";
const router = express.Router();

router.route("/items").post(createOrderItems);

router.route("/").post(createOrders).get(getOrders);

export default router;
