"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const choice_1 = require("../models/choice");
const math_function_1 = require("./math_function");
exports.cal = (choosen, val1, val2) => {
    switch (choosen) {
        case choice_1.Choice.add:
            return math_function_1.addFn(val1, val2);
            break;
        case choice_1.Choice.minus:
            return math_function_1.minusFn(val1, val2);
            break;
        case choice_1.Choice.multiply:
            return math_function_1.multiplyFn(val1, val2);
            break;
        case choice_1.Choice.divide:
            return math_function_1.divideFn(val1, val2);
            break;
    }
};
