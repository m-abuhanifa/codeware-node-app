import express from "express";
import {
  createChild,
  createFolder,
  createGrand,
  getFolders,
} from "../controllers/folderController";
const router = express.Router();

router.route("/folders").post(createFolder).get(getFolders);

router.route("/child").patch(createChild);

router.route("/grand").patch(createGrand);

export default router;
