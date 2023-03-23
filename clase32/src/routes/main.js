const express = require('express');

const mainController = require('../controllers/mainController');
const userLogged = require('../middlewares/userLogged');

const router = express.Router();

router.get('/', mainController.index);
router.get('/dashboard', userLogged, mainController.dashboard);
router.post('/', mainController.login);

module.exports = router;