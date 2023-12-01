const fs = require('fs');

const filePath = 'C:/Users/tanvi/OneDrive/Documents/tanvi/APL/T_APL/renamed.txt'; // Your provided file path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    console.log('File content:');
    console.log(data);
});
