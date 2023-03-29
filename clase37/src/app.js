require('dotenv').config();
const express = require('express');
const path = require('path');

const genresRoutes = require('./routes/genres');
const moviesRoutes = require('./routes/movies');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/genre', genresRoutes);
app.use('/movie', moviesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server stated on http://localhost:${port}`);
});
