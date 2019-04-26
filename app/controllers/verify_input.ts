import { Choice } from '../models/choice';

export const verifyInput = (answer: string) => {
  const check = parseInt(answer, 10);
  switch (check) {
    case Choice.add:
      return true;
      break;
    case Choice.minus:
      return true;
      break;
    case Choice.multiply:
      return true;
      break;
    case Choice.divide:
      return true;
      break;
    default:
    return false;
  }
};

export const checkNumber = (val: string) => {
  const result = parseInt(val, 10);

  if (result) {
    return true;
  } else {
    return false;
  }
};
