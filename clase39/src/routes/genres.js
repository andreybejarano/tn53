const express = require('express');

const genresController = require('../controllers/genresController');

const router = express.Router();

router.get('/', genresController.list);
router.get('/detail/:id', genresController.detail);
router.get('/list', genresController.genresWithMovies);

module.exports = router;