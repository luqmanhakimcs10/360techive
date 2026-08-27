import { Router, type Request, type Response } from "express";
import type { HealthCheckResponse } from "@ai-software-house/shared-types";
import { pool } from "../db/pool";

const router = Router();

router.get("/", async (_req: Request, res: Response<HealthCheckResponse>) => {
  let db: "connected" | "disconnected" = "disconnected";
  try {
    await pool.query("SELECT 1");
    db = "connected";
  } catch {
    db = "disconnected";
  }

  const status = db === "connected" ? "ok" : "degraded";

  res.json({
    status,
    timestamp: new Date().toISOString(),
    version: "0.1.0",
    db,
  });
});

export default router;
