const fs = require('fs');

// read
fs.readFile('./docs/samplefile.txt', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data.toString());
})

if (!fs.existsSync('./docs/samplefile.txt')) {
    // write
    // able to create new file and write data
    fs.writeFile('./docs/samplefile.txt', 'Hello NodeJs', (err, data) => {
        if (err) {
            console.log(err)
        }
    
        console.log('after writing file');
    })
} else {
    console.log('file exists');
    // delete file
    fs.unlink('./docs/samplefile.txt', (err) => {
        if (err) console.log(err);

        console.log('file deleted');
    })
}

// mean above functions are async funtions and can take a little bit longer to run
console.log('latest line of code')

if (fs.existsSync('./new-folder')) {
    // folder delete
    fs.rmdir('./new-folder', (err) => {
        if (err)  console.log(err)
    
        console.log('folder deleted')
    })
    
} else {
    
    // folder create
    fs.mkdir('./new-folder', (err) => {
        if (err) console.log(err)
    
        console.log('folder created');
    })
}


