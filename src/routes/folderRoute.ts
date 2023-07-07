import express from "express";
import { createFolder, getFolders } from "../controllers/folderController";
const router = express.Router();

router.route("/folders").post(createFolder).get(getFolders);

export default router;
