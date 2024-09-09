const fs = require('node:fs');
const { writeFile } = require('node:fs/promises');
const { Buffer } = require('node:buffer');

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function logFile() {
  try {
    const filePath = resolve('./file.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();

