const performTask = (callback) => {
    // Simulating an asynchronous task
    setTimeout(() => {
        const result = 'Task completed!';
        callback(result);
    }, 200);
};

const handleResult = (result) => {
    console.log(result);
};

// Calling performTask with callback
performTask(handleResult);
