const calc = require('./funcs')
const fs = require('fs') // File System

// fs.writeFile('./data.txt', 'Webeato Is The Best.', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File is Created !!!');
// })

fs.rename('./data.txt', './info.txt', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File is renamed !!!');
})