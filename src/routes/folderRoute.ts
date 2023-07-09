import express from "express";
import {
  createChild,
  createFolder,
  getFolders,
} from "../controllers/folderController";
const router = express.Router();

router.route("/folders").post(createFolder).get(getFolders);

router.route("/child").patch(createChild);

export default router;
