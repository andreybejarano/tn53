const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});