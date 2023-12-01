const fs = require('fs');

const writableStream = fs.createWriteStream('path/to/your/output.txt'); // Replace with your output file path

const dataToWrite = 'Hello, Writing to Stream!';

writableStream.write(dataToWrite, 'utf8', () => {
    console.log('Data written to stream successfully.');
});

writableStream.end();
