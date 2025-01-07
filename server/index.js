import express from "express";
import connect from "./connect/connect.js";
import userRouter from "../server/router/userRouter.js";
import productRouter from "../server/router/productRouter.js";
import cartRouter from "../server/router/cartRouter.js";
import orderRouter from "../server/router/orderRouter.js";
import adminRouter from "./router/adminRouter.js";
import errHandler from "../server/middleware/errHandle.js";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
const app = express();
const PORT = 5000;
app.use(cors());

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/admin", adminRouter);
app.use(errHandler);
const start = async (req, res, next) => {
  connect();
  app.listen(PORT, function () {
    console.log("App listening on port", PORT);
  });
};
start();
