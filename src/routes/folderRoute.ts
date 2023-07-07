import express from "express";
import { createFolder } from "../controllers/folderController";
const router = express.Router();

router.route("/folders").post(createFolder);

export default router;
