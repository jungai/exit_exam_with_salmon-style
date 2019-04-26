"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verify_input_1 = require("./verify_input");
test('correct choice with press 1', () => {
    expect(verify_input_1.verifyInput('1')).toBeTruthy();
});
test('correct choice with press 2', () => {
    expect(verify_input_1.verifyInput('2')).toBeTruthy();
});
test('correct choice with press 3', () => {
    expect(verify_input_1.verifyInput('3')).toBeTruthy();
});
test('correct choice with press 4', () => {
    expect(verify_input_1.verifyInput('4')).toBeTruthy();
});
test('wrong choice', () => {
    expect(verify_input_1.verifyInput('5')).toBeFalsy();
});
test('is number', () => {
    expect(verify_input_1.checkNumber('12')).toBeTruthy();
});
test('not number', () => {
    expect(verify_input_1.checkNumber('foo')).toBeFalsy();
});
test('not number second test', () => {
    expect(verify_input_1.checkNumber('foo123')).toBeFalsy();
});
