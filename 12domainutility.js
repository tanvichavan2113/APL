const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        // Reading file asynchronously
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error.message);
    }
}

// Replace with the path to your file
const filePath = 'C:/Users/tanvi/OneDrive/Documents/tanvi/APL/T_APL/renamed.txt';

// Calling the async function
readFileAsync(filePath);
