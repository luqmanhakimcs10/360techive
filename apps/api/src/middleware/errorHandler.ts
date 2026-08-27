import type { Request, Response, NextFunction } from "express";
import type { ApiResponse } from "@ai-software-house/shared-types";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response<ApiResponse>,
  _next: NextFunction
): void {
  console.error("Unhandled error:", err);

  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === "production" ? "Internal server error" : err.message,
  });
}
