"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const serverError_error_1 = __importDefault(require("../errors/serverError.error"));
function errorHandler(error, _req, res, next) {
    if (error instanceof serverError_error_1.default) {
        res.status(error.statusCode).json({
            error: error.message,
        });
    }
    else {
        console.error("Unexpected error:", error);
        res.status(500).json({
            error: "An unexpected error occurred.",
        });
    }
    next();
}
