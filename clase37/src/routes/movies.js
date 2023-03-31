const express = require('express');

const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);

module.exports = router;