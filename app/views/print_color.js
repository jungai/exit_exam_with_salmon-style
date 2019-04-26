"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
function logBlue(msg) {
    console.log(chalk_1.default.blue(msg));
}
exports.logBlue = logBlue;
function logRed(msg) {
    console.log(chalk_1.default.red(msg));
}
exports.logRed = logRed;
