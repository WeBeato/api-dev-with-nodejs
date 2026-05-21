const calc = require('./funcs')
const fs = require('fs') // File System

// fs.writeFile('./data.txt', 'Webeato Is The Best.', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File is Created !!!');
// })

// fs.rename('./info.txt', './my-data.txt', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File is renamed !!!');
// })

let courses = [
    { id: 1, title: 'React', price: 2_200_000 },
    { id: 2, title: 'Nodejs', price: 1_900_000 },
    { id: 1, title: 'Js Expert', price: 'Free' },
]

courses.forEach(course => {
    fs.appendFile('./my-data.txt', `\n${course.title} - ${course.price}`, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Text is appended !!!');
    })
})
