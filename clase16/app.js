const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/babbage.html'));
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './views/berners-lee.html'));
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clarke.html'));
});

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.html'));
});

app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hopper.html'));
});

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './views/turing.html'));
});

app.get('/hola', (req, res) => {
    res.send('Hola tn53');
});

app.listen(3030, () => {
    console.log('Server started on http://localhost:3030');
});