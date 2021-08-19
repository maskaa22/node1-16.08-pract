const fs = require('fs');
const path = require('path');

const users = require('./practic/users');

for (let user of users) {

    const userToString = JSON.stringify(user);
    const userName = `${user.name}.txt`;

    const usersDirectori = path.join(__dirname, userName);
    const manOlder20 = path.join(__dirname, 'practic', 'manOlder20', userName);
    const manYounger20 = path.join(__dirname, 'practic', 'manYounger20', userName);
    const womanOlder20 = path.join(__dirname, 'practic', 'womanOlder20', userName);
    const womanYounger20 = path.join(__dirname, 'practic', 'womanYounger20', userName);

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