import { Request, Response } from "express";
import Child from "../models/Child";
import Folder from "../models/Folder";
import Grand from "../models/Grand";

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
    const data = await Folder.find().populate("children").populate("children");
    const d = await Child.find().populate("children").populate("children");
    const t = await Grand.find().populate("children").populate("children");
    res.json({ message: "Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

export const createChild = async (req: Request, res: Response) => {
  try {
    const { name, parent } = req.body;

    const data = await Child.create({ name, parent });

    const id = data._id;

    console.log(id);

    const folder = await Folder.findById(parent);

    await folder?.updateOne({ $push: { children: id } });

    res.json({ message: "Child Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};

export const createGrand = async (req: Request, res: Response) => {
  try {
    const { name, parent } = req.body;

    const data = await Grand.create({ name, parent });

    const id = data._id;

    console.log(id);

    const child = await Child.findById(parent);

    await child?.updateOne({ $push: { children: id } });

    res.json({ message: "Grand Folder created", data: data });
  } catch (error) {
    res.json({ status: "error", message: error });
  }
};
