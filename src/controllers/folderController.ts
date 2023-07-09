import { Request, Response } from "express";
import Child from "../models/Child";
import Folder from "../models/Folder";

export const createFolder = async (req: Request, res: Response) => {
  try {
    const { name, parent } = req.body;
    const data = await Child.create({ name, parent });
    res.json({ message: "Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

export const getFolders = async (req: Request, res: Response) => {
  try {
    const data = await Folder.find().populate("children").populate("parent");
    res.json({ message: "Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

export const createChild = async (req: Request, res: Response) => {
  try {
    const { name, parent } = req.body;
    const data = await Child.create({ name, parent });
    res.json({ message: "Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};
