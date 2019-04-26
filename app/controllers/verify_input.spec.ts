import { checkNumber, verifyInput } from './verify_input';

test('correct choice with press 1', () => {
  expect(verifyInput('1')).toBeTruthy();
});

test('correct choice with press 2', () => {
  expect(verifyInput('2')).toBeTruthy();
});

test('correct choice with press 3', () => {
  expect(verifyInput('3')).toBeTruthy();
});

test('correct choice with press 4', () => {
  expect(verifyInput('4')).toBeTruthy();
});

test('wrong choice', () => {
  expect(verifyInput('5')).toBeFalsy();
});

test('is number', () => {
  expect(checkNumber('12')).toBeTruthy();
});

test('not number', () => {
  expect(checkNumber('foo')).toBeFalsy();
});

test('not number second test', () => {
  expect(checkNumber('foo123')).toBeFalsy();
});
