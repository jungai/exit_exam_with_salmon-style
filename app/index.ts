import { cal } from './controllers/calculator';
import { convertTypeToInt } from './controllers/convert_data';
import { showPromptGetInput } from './controllers/get_input';
import { checkNumber, verifyInput } from './controllers/verify_input';
import { logBlue, logRed } from './views/print_color';

function main() {
  logBlue('📌 Terminal Calculator');
  logRed(`  press 1 -> +
  press 2 -> -
  press 3 -> *
  press 4 -> %`);
  let choosen = showPromptGetInput('🙏 Please Choose: ');
  while (!verifyInput(choosen)) {
    choosen = showPromptGetInput('😭 Please try again ');
  }
  logBlue('Step2 Insert values');
  let value1 = showPromptGetInput('  please insert value1 : ');
  while (!checkNumber(value1)) {
    value1 = showPromptGetInput('  insert value1 again: ');
  }
  let value2 = showPromptGetInput('  please insert value2 : ');
  while (!checkNumber(value2)) {
    value2 = showPromptGetInput('  insert value2 again : ');
  }
  const { c1, c2, c3 } = convertTypeToInt({choosen, value1, value2});

  logRed(`📌 Ans is ${cal(c1, c2, c3)}`);
}

main();
