const db = require('../database/models');


const genresController = {
    list: async (req, res) => {
        const genres = await db.Genre.findAll();
        res.render('genresList.ejs', { genres });
    },
    detail: async (req, res) => {
        const genre = await db.Genre.findByPk(req.params.id);
        res.render('genresDetail.ejs', { genre });
    },
    genresWithMovies: async (req, res) => {
        try {
            const genres = await db.Genre.findAll({
                attributes: { exclude: ['updated_at', 'created_at'] },
                include: [
                    { association: 'movies', attributes: { exclude: ['updated_at', 'created_at', 'genre_id'] } }
                ]
            });
            res.send(genres);
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = genresController;