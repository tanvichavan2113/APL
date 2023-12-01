const os = require('os');

// 1. OS platform
console.log('Platform:', os.platform());

// 2. OS architecture
console.log('Architecture:', os.arch());

// 3. Total memoryn
console.log('Total memory:', os.totalmem());

// 4. Free memory
console.log('Free memory:', os.freemem());

// 5. CPU information
console.log('CPU information:', os.cpus());
