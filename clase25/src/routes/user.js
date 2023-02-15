const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/register', userController.register);

module.exports = router;