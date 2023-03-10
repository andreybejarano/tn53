const express = require('express');
const path = require('path');
const session = require('express-session');

const mainRoutes = require('./routes/main');

const app = express();

app.use(session({ secret: 'secret' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`server started on: http://localhost:${port}`);
});