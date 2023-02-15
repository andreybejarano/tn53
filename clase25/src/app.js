const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

app.use('/', mainRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
});