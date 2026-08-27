import express from "express";
import cors from "cors";
import helmet from "helmet";
import healthRouter from "./routes/health";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);

app.use(errorHandler);

export default app;
