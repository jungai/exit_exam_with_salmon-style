import { convertTypeToInt } from './convert_data';

test('return all type number', () => {
  expect(convertTypeToInt({choosen: '1', value1: '2', value2: '3'})).toEqual({c1: 1, c2: 2, c3: 3});
});
