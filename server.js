const calc = require('./funcs')
const fs = require('fs') // File System
const path = require('path')

// console.log(__filename);
// console.log(__dirname);

let modelsPathWithModule = path.join(__dirname, '/../../models')
let modelsPathWithoutModule = `${__dirname}/../../models`

console.log(modelsPathWithModule);
console.log(modelsPathWithoutModule);