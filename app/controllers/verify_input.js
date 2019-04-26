"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const choice_1 = require("../models/choice");
exports.verifyInput = (answer) => {
    const check = parseInt(answer, 10);
    switch (check) {
        case choice_1.Choice.add:
            return true;
            break;
        case choice_1.Choice.minus:
            return true;
            break;
        case choice_1.Choice.multiply:
            return true;
            break;
        case choice_1.Choice.divide:
            return true;
            break;
        default:
            return false;
    }
};
exports.checkNumber = (val) => {
    const result = parseInt(val, 10);
    if (result) {
        return true;
    }
    else {
        return false;
    }
};
