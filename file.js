const fs = require('fs');

// read
fs.readFile('./docs/samplefile.txt', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log(data.toString());
})

// write
// able to create new file and write data
fs.writeFile('./docs/samplefile.txt', 'Hello NodeJs', (err, data) => {
    if (err) {
        console.log(err)
    }

    console.log('after writing file');
})

// mean above functions are async funtions and can take a little bit longer to run
console.log('latest line of code')


