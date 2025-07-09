import ServerError from "../errors/serverError.error";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
    error: Error | ServerError,
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    if (error instanceof ServerError) {
        res.status(error.statusCode).json({
            error: error.message,
        });
    } else {
        console.error("Unexpected error:", error);
        res.status(500).json({
            error: "An unexpected error occurred.",
        });
    }
    next();
}
