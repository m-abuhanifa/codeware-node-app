import express from "express";
import { createOrderItems } from "../controllers/orderController";
const router = express.Router();

router.route("/").post(createOrderItems);

export default router;
