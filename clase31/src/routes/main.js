const express = require('express');

const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('home');
});

router.get('/services', (req, res) => {
    res.send('services');
});

router.get('/admin', authMiddleware, (req, res) => {
    const adminName = req.adminName;
    res.send(`Hola Admin: ${adminName}`);
});

module.exports = router;