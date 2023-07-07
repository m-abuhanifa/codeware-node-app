import { Request, Response } from "express";

export const createFolder = async (req: Request, res: Response) => {
  try {
    // const { name } = req.body;
    console.log(req.body);
    res.json({ message: "Folder created" });
  } catch (error) {
    console.log(error);
  }
};
