"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnosesRouter = void 0;
const express_1 = __importDefault(require("express"));
const diagnoses_controller_1 = require("../controllers/diagnoses.controller");
exports.diagnosesRouter = express_1.default.Router();
exports.diagnosesRouter.route("/").get(diagnoses_controller_1.getAllDiagnoses);
