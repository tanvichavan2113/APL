const express = require('express');
const app = express();
const PORT = 3000;

// Middleware function using app.use()
app.use((req, res, next) => {
    console.log('Middleware function executed.');
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
