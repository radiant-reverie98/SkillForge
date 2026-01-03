import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";

const app = express()

app.use(
    cors({
        origin : "https://localhost:5173",
        credentials : true,
    })
)

app.use("/auth", authRoutes);

app.use(express.json())
