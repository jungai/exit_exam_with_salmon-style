import prompt = require('prompt-sync');

export const showPromptGetInput = (msg: string) => prompt()(msg);
