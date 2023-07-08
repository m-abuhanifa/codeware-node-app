import { Request, Response } from "express";
import OrderItems from "../models/OrderItems";

export const createOrderItems = async (req: Request, res: Response) => {
  try {
    const orderItems = await OrderItems.create(req.body);
    res.json(orderItems);
  } catch (error) {
    res.json({ message: error });
  }
};
