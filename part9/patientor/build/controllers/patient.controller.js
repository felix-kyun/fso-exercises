"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPatients = void 0;
const patients_1 = require("../data/patients");
const getAllPatients = () => {
    // return patients.map(({ ssn: _ssn, ...rest }) => rest);
    return patients_1.patients;
};
exports.getAllPatients = getAllPatients;
