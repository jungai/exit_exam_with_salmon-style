"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./controllers/calculator");
const convert_data_1 = require("./controllers/convert_data");
const get_input_1 = require("./controllers/get_input");
const verify_input_1 = require("./controllers/verify_input");
const print_color_1 = require("./views/print_color");
function main() {
    print_color_1.logBlue('📌 Terminal Calculator');
    print_color_1.logRed(`  press 1 -> +
  press 2 -> -
  press 3 -> *
  press 4 -> %`);
    let choosen = get_input_1.showPromptGetInput('🙏 Please Choose: ');
    while (!verify_input_1.verifyInput(choosen)) {
        choosen = get_input_1.showPromptGetInput('😭 Please try again ');
    }
    print_color_1.logBlue('Step2 Insert values');
    let value1 = get_input_1.showPromptGetInput('  please insert value1 : ');
    while (!verify_input_1.checkNumber(value1)) {
        value1 = get_input_1.showPromptGetInput('  insert value1 again: ');
    }
    let value2 = get_input_1.showPromptGetInput('  please insert value2 : ');
    while (!verify_input_1.checkNumber(value2)) {
        value2 = get_input_1.showPromptGetInput('  insert value2 again : ');
    }
    const { c1, c2, c3 } = convert_data_1.convertTypeToInt({ choosen, value1, value2 });
    print_color_1.logRed(`📌 Ans is ${calculator_1.cal(c1, c2, c3)}`);
}
main();
