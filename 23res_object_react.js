const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // Demonstrating response object functions
    res.status(200).send('Hello from Express!');
    res.json({ message: 'JSON response' });
    res.redirect('/new-location');
    res.sendFile(__dirname + '/path/to/file.txt');
    res.render('template', { data: 'template data' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
