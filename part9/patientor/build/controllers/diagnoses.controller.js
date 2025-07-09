"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDiagnoses = void 0;
const diagnosis_service_1 = require("../services/diagnosis.service");
const getAllDiagnoses = (_req, res) => {
    const diagnosis = (0, diagnosis_service_1.getDiagnosesData)();
    res.status(200).json(diagnosis);
};
exports.getAllDiagnoses = getAllDiagnoses;
