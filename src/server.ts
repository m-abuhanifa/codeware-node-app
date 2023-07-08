import cors from "cors";
import express from "express";
import connectDB from "./config/db";
import folderRoute from "./routes/folderRoute";
import router from "./routes/orderRoute";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", folderRoute);

app.use("/api/order", router);

//mongoDB connection

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
