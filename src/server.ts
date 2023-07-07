import cors from "cors";
import express from "express";
import folderRoute from "./routes/folderRoute";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", folderRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
