const fs = require('fs');

const readableStream = fs.createReadStream('C:/Users/tanvi/OneDrive/Documents/tanvi/APL/T_APL/renamed.txt'); // Replace with your file path

readableStream.on('data', (chunk) => {
    console.log('Read chunk:', chunk.toString());
});

readableStream.on('end', () => {
    console.log('Reading stream completed.');
});
