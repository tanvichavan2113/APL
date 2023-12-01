const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
    // Demonstrating request object functions
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Query Parameters:', req.query);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    res.send('Check the console for request details.');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
