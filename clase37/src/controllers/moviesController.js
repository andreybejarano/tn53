const db = require('../database/models');

const controller = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                res.render('moviesList', { movies });
            })
            .catch((err) => {
                res.send(err);
            });
    },
    detail: async (req, res) => {
        try {
            const movie = await db.Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ message: 'Pelicula no encontrada' });
            }
            res.render('moviesDetail', { movie });
        } catch (error) {
            res.send(error);
        }
    },
    new: async (req, res) => {
        try {
            const movies = await db.Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            });
            res.render('newestMovies', { movies });
        } catch (error) {
            res.send(error);
        }
    },
    recomended: async (req, res) => {
        try {
            const movies = await db.Movie.findAll({
                where: {
                    rating: { [db.Sequelize.Op.gte]: 8 }
                },
                order: [
                    ['rating', 'DESC']
                ]
            })
            res.render('recommendedMovies.ejs', { movies });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = controller;