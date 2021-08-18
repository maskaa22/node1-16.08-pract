//домашка
const fs = require('fs');
const path = require('path');
const womenPath = path.join(__dirname, '1800');
const manPath = path.join(__dirname, '2000');

fs.readdir(womenPath, (err, files) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    files.forEach(file=>
    {
        const filePath = path.join(womenPath, file)
        const namePathFile = path.basename(filePath)
        const filenamePathNew = path.join(__dirname, '2000', namePathFile);

        fs.readFile(filePath, (err1, data) =>
        {
            if (err)
            {
                console.log(err);
                return
            }
            const arr = JSON.parse(data.toString());
            if(arr.gender==="male")
            {
                fs.rename(filePath, filenamePathNew, err2 =>
                {
                    console.log(err2);
                })
            }

        })
    })
})

fs.readdir(manPath, (err, files) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    files.forEach(file=>
    {
        const filePath = path.join(manPath, file)
        const namePathFile = path.basename(filePath)
        const filenamePathNew = path.join(__dirname, '1800', namePathFile);

        fs.readFile(filePath, (err1, data) =>
        {
            if (err)
            {
                console.log(err);
                return
            }
            const arr = JSON.parse(data.toString());
            if(arr.gender==="female")
            {
                fs.rename(filePath, filenamePathNew, err2 =>
                {
                    console.log(err2);
                })
            }

        })
    })
})
