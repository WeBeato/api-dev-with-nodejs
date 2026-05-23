const calc = require('./funcs')
const fs = require('fs') // File System
const path = require('path')
const os = require('os')

console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());