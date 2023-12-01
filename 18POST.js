const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

app.post('/', (req, res) => {
    const data = req.body;
    res.json({ message: 'POST request received', data });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
