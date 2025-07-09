"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = "ServerError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.default = ServerError;
