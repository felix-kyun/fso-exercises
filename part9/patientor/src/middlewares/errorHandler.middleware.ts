import ServerError from "../errors/serverError.error";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    if (error instanceof ServerError) {
        const info: Record<string, unknown> = error.info || {};
        res.status(error.statusCode).json({
            error: error.message,
            ...info,
        });
    } else {
        res.status(500).json({
            error: "An unexpected error occurred.",
        });
    }
    next();
}
