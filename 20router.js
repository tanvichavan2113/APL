const express = require('express');
const app = express();
const PORT = 3000;

// Router for '/api'
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send('API Home');
});

apiRouter.get('/users', (req, res) => {
    res.send('List of users');
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
