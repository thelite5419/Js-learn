

const os = require('os')

const thelite = require ("./thelite");

const fs = require ("./read");
const { log } = require('console');

// console.log("hello word", thelite);

console.log(os.freemem());

console.log(os.hostname());

console.log(os.uptime());

console.log('thisis');
