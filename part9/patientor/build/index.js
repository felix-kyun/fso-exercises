"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const diagnoses_router_1 = require("./routers/diagnoses.router");
const errorHandler_middlewares_1 = require("./middlewares/errorHandler.middlewares");
const app = (0, express_1.default)();
const PORT = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
app.use("/api/diagnoses", diagnoses_router_1.diagnosesRouter);
// Error handling middleware
app.use(errorHandler_middlewares_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
