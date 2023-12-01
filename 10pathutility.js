const path = require('path');

// 1. Joining paths
console.log('Joined path:', path.join('/folder', 'file.txt'));

// 2. Resolving paths
console.log('Resolved path:', path.resolve('folder', 'file.txt'));

// 3. Extracting file extension
console.log('File extension:', path.extname('file.txt'));

// 4. Parsing path
const parsedPath = path.parse('/folder/file.txt');
console.log('Parsed path:', parsedPath);

// 5. Normalizing path
console.log('Normalized path:', path.normalize('/folder//subfolder/file.txt'));
