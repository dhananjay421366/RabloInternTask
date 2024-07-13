import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from "./router/user.routes.js";
import productRouter from "./router/product.routes.js"



//routes declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);


export { app };
