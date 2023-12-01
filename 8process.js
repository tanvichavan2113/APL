// 1. Getting process arguments
console.log('Process arguments:', process.argv);

// 2. Current working directory
console.log('Current directory:', process.cwd());

// 3. Memory usage
console.log('Memory usage:', process.memoryUsage());

// 4. Platform information
console.log('Platform:', process.platform);

// 5. Exit the process
console.log('Exiting...');
process.exit();
