import { Request, Response } from "express";
import Folder from "../models/Folder";

export const createFolder = async (req: Request, res: Response) => {
  try {
    const { name, parent } = req.body;
    const data = await Folder.create({ name, parent });
    res.json({ message: "Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

export const getFolders = async (req: Request, res: Response) => {
  try {
    const data = await Folder.find().populate("children").populate("parent");
    res.json({ message: "Folders", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};
