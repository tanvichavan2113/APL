const fs = require('fs');

// 1. Creating a new file
fs.writeFile('example.txt', 'Hello, File System!', (err) => {
    if (err) throw err;
    console.log('File created successfully.');
});

// 2. Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});

// 3. Renaming a file
fs.rename('example.txt', 're.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
});

// 4. Deleting a file
// fs.unlink('renamed.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully.');
// });

// 5. Checking if a file exists
fs.access('re.txt', fs.constants.F_OK, (err) => {
    console.log('File exists:', !err);
});
