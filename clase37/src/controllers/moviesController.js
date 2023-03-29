const db = require('../database/models');

const controller = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                res.send(movies);
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
            res.send(movie);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = controller;