const fs = require('fs');

const readStream = fs.createReadStream('./docs/large.txt');

const writeStream = fs.createWriteStream('./docs/large-write.txt');

// listen to the stream of data
readStream.on('data', function(data) {
    writeStream.write(data.toString());
    writeStream.write('----chunk------');
})

// another way to write data of read stream (work as above code)
readStream.pipe(writeStream);