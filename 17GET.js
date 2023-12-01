const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello! This is a GET request.');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
