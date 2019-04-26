import { Choice } from '../models/choice';
import { addFn, divideFn, minusFn, multiplyFn } from './math_function';

export const cal = (choosen: any, val1: number, val2: number) => {
  switch (choosen) {
    case Choice.add:
      return addFn(val1, val2);
      break;
    case Choice.minus:
      return minusFn(val1, val2);
      break;
    case Choice.multiply:
      return multiplyFn(val1, val2);
      break;
    case Choice.divide:
      return divideFn(val1, val2);
      break;
  }
};
