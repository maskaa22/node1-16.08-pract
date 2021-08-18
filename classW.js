// const fileData = require('./dir/file1')
// fileData.greeting('Muroslava')
//
// console.log(__dirname);//поточний шлях до директорії
// console.log(__filename);//назва файлу який запустили


const fs = require('fs');
const path = require('path');
const util = require('util');



const textPath = path.join(__dirname, 'dir', 'text.txt');
const folderWithDeletedData = path.join(__dirname, 'folder', 'deleter.txt');
const dirToReadPath = path.join(__dirname, 'dir');

//записывает/перезаписывает данные в файл
// fs.writeFile(textPath, 'HELLO 2222', err => {
//     console.log(err);
// })

//дописує дані в файл
// fs.appendFile(textPath, 'New HELLO \n', err => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('DONE');
// })

//створює папки
// const mkDir =path.join(__dirname, 'dir', 'folder2', 'innerFolder', 'HELLxxx')
// fs.mkdir(mkDir, {recursive:true}, err => {
//     console.log(err);
// })

//читати інфу з файлів
// fs.readFile(textPath, ((err, data) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     // fs.appendFile(textPath2, data, err1 => {
//     //
//     // })
//     console.log(data.toString());
// }))

//зчитувати директорію
// fs.readdir(dirToReadPath, (err, files) => {
//     if (err){
//         console.log(err);
//         return
//     }
//     //console.log(file);
//     files.forEach(file=>{
//         const filePath = path.join(dirToReadPath, file)
//         //інфа про кожний файл
//         fs.stat(filePath, (err1, stats) => {
//             console.log('_________________');
//             console.log(stats.isFile(), 'isFile');
//             console.log(stats.isDirectory(), 'isDirectory');
//             console.log(stats.size);
//             console.log('_________________');
//         })
//     })
// })

//стирати не пусті папки
// fs.rmdir(path.join(dirToReadPath, 'thisIsDir'), err => {
//     console.log(err);
// })

//стирати файли
// fs.unlink(path.join(__dirname, 'dir', 'text2.txt'), err => {
//     console.log(err);
// })

//переміщувати файли
//звідки    /куди перенести
// fs.rename(textPath, folderWithDeletedData, err => {
//     console.log(err);
// })

//приймає функцію і повертає промісіфіковану
// const appendPromise = util.promisify(fs.appendFile)
//
// appendPromise(folderWithDeletedData, 'Text data with promise \n').catch(reason => {
//     console.log(reason);
// })

const readStream = fs.createReadStream(folderWithDeletedData);
const wrireStream = fs.createWriteStream(textPath);

readStream.on('data', chunk => {

    wrireStream.write(chunk)

})
// fs.readdir(fullPath, (err, files) =>
// {
//     if (err)
//     {
//         console.log(err);
//         //return
//     }
//
//
//         files.forEach(file=>
//         {
//             //const filePath = path.join(womenPath, file)
//             const filePath = path.join(fullPath, file)
//             //console.log(filePath);
//             const namePathFile = path.basename(filePath)
//             //console.log(namePathFile);
//            if (filePath===1800){
//                console.log(22);
//                // for (let fil of file){
//                //     console.log(fil);
//                // }
//
//            }
//
//             const filenamePathNew = path.join(__dirname, '2000', namePathFile);
//
//             // fs.readFile(filePath, (err1, data) =>
//             // {
//             //     if (err)
//             //     {
//             //         console.log(err);
//             //         //return
//             //     }
//             //     //console.log(data);
//             //     // const arr = JSON.parse(data.toString());
//             //     // if(arr.gender==="male")
//             //     // {
//             //     //     fs.rename(filePath, filenamePathNew, err2 =>
//             //     //     {
//             //     //        console.log(err2);
//             //     //     })
//             //     // }
//             //
//             // })
//         })
//
//
//
//     //
//     // files.forEach(file=>
//     // {
//     //     const filePath = path.join(womenPath, file)
//     //     const namePathFile = path.basename(filePath)
//     //     const filenamePathNew = path.join(__dirname, '2000', namePathFile);
//     //
//     //     fs.readFile(filePath, (err1, data) =>
//     //     {
//     //         if (err)
//     //         {
//     //             console.log(err);
//     //             return
//     //         }
//     //         const arr = JSON.parse(data.toString());
//     //         if(arr.gender==="male")
//     //         {
//     //             fs.rename(filePath, filenamePathNew, err2 =>
//     //             {
//     //                console.log(err2);
//     //             })
//     //         }
//     //
//     //     })
//     // })
// })
