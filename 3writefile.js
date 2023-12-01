const fs = require('fs');

const filePath = 'C:/Users/tanvi/OneDrive/Documents/tanvi/APL/T_APL/re.txt'; // Replace with your file path
const contentToWrite = 'Hello, Writing to File!';

fs.writeFile(filePath, contentToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('Content written to file successfully.');
});
