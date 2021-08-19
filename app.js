const fs = require('fs');
const path = require('path');

const users = require('./practic/users');

const manOlder20mkDir =path.join(__dirname, 'practic', 'manOlder20');
const manYounger20mkDir =path.join(__dirname, 'practic', 'manYounger20');
const womanOlder20mkDir =path.join(__dirname, 'practic', 'womanOlder20');
const womanYounger20mkDir =path.join(__dirname, 'practic', 'womanYounger20')

const createDir = (mkdir)=>{
    fs.mkdir(mkdir, {recursive:true}, err => {
    console.log(err);
})
}

createDir(manOlder20mkDir);
createDir(manYounger20mkDir);
createDir(womanOlder20mkDir);
createDir(womanYounger20mkDir);

for (let user of users) {

    const userToString = JSON.stringify(user);
    const userName = `${user.name}.txt`;

    const usersDirectori = path.join(__dirname, userName);
    const manOlder20 = path.join(manOlder20mkDir, userName);
    const manYounger20 = path.join(manYounger20mkDir, userName);
    const womanOlder20 = path.join(womanOlder20mkDir, userName);
    const womanYounger20 = path.join(womanYounger20mkDir, userName);

    fs.open(userName, 'w', err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('File creted');
    });

    fs.appendFile(userName, userToString, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('File - writing');
    });

    fs.readFile(usersDirectori, ((err, data) => {
        if (err) {
            console.log(err);
            return
        }

        if (user.age >= 20) {
            if (user.gender === 'male') {
                fs.rename(usersDirectori, manOlder20, err => {
                    console.log(err);
                })
                return;
            }
            if (user.gender === 'female') {
                fs.rename(usersDirectori, womanOlder20, err => {
                    console.log(err);
                })
            }
            return;
        }

        if (user.age < 20) {
            if (user.gender === 'male') {
                fs.rename(usersDirectori, manYounger20, err => {
                    console.log(err);
                })
                return;
            }
            if (user.gender === 'female') {
                fs.rename(usersDirectori, womanYounger20, err => {
                    console.log(err);
                })
            }
            return;
        }
        console.log('Sorry');
    }))
}