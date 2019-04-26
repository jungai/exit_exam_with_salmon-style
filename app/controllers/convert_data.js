"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTypeToInt = (params) => {
    const { choosen, value1, value2 } = params;
    const c1 = parseInt(choosen, 10);
    const c2 = parseInt(value1, 10);
    const c3 = parseInt(value2, 10);
    return { c1, c2, c3 };
};
