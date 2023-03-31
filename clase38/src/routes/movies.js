const express = require('express');

const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);
router.get('/add', moviesController.add);
router.post('/create', moviesController.create);
router.get('/edit/:id', moviesController.edit);
router.put('/update/:id', moviesController.update);

module.exports = router;