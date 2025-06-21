import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();
app.use(express.json());

app.use(
    cors({
        origin: "https://chattrix-liard.vercel.app", // ✅ Vercel URL
        credentials: true, // ✅ Must be true to allow cookies
    })
);

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
