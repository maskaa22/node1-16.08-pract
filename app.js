//домашка
const fs = require('fs');
const path = require('path');
const womenPath = path.join(__dirname, '1800');
const manPath = path.join(__dirname, '2000');
//
// fs.readdir(womenPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     files.forEach(file => {
//         const filePath = path.join(womenPath, file)
//         const namePathFile = path.basename(filePath)
//         const filenamePathNew = path.join(__dirname, '2000', namePathFile);
//
//         fs.readFile(filePath, (err1, data) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             const arr = JSON.parse(data.toString());
//             if (arr.gender === "male") {
//                 fs.rename(filePath, filenamePathNew, err2 => {
//                     console.log(err2);
//                 })
//             }
//
//         })
//     })
// })
//
// fs.readdir(manPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     files.forEach(file => {
//         const filePath = path.join(manPath, file)
//         const namePathFile = path.basename(filePath)
//         const filenamePathNew = path.join(__dirname, '1800', namePathFile);
//
//         fs.readFile(filePath, (err1, data) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             const arr = JSON.parse(data.toString());
//             if (arr.gender === "female") {
//                 fs.rename(filePath, filenamePathNew, err2 => {
//                     console.log(err2);
//                 })
//             }
//
//         })
//     })
// })
//


const users = require('./practic/users');
for (let user of users) {

    const userToString = JSON.stringify(user);

    const usersDirectori = path.join(__dirname, user.name);
    const manOlder20 = path.join(__dirname, 'manOlder20', user.name);
    const manYounger20 = path.join(__dirname, 'manYounger20', user.name);
    const womanOlder20 = path.join(__dirname, 'womanOlder20', user.name);
    const womanYounger20 = path.join(__dirname, 'womanYounger20', user.name);



    fs.open(`${user.name}.txt`, 'w', err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('File creted');
    });

    fs.appendFile(`${user.name}.txt`, userToString, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('OK');
    });

    if (user.age >= 20) {
        //console.log(20);
        if (user.gender === 'female') {
            console.log(333);
            fs.rename(usersDirectori, womanOlder20, err => {
                console.log(err);
            })
        }
    } else console.log(111);
}