import { Request, Response } from "express";
import Order from "../models/Order";
import OrderItems from "../models/OrderItems";

export const createOrders = async (req: Request, res: Response) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createOrderItems = async (req: Request, res: Response) => {
  try {
    const orderItems = await OrderItems.create(req.body);
    res.json(orderItems);
  } catch (error) {
    res.json({ message: error });
  }
};
