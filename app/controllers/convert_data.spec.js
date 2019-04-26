"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_data_1 = require("./convert_data");
test('return all type number', () => {
    expect(convert_data_1.convertTypeToInt({ choosen: '1', value1: '2', value2: '3' })).toEqual({ c1: 1, c2: 2, c3: 3 });
});
