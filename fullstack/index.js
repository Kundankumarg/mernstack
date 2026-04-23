import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api/v1/users", userRoutes);

// DB connect
db();

// server start
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
