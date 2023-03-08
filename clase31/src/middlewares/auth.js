function auth(req, res, next) {
    const admins = [
        'Ada',
        'Greta',
        'Vim',
        'Tim'
    ];
    const { user = '' } = req.query;
    const userFound = admins.find(element => element.toLowerCase() === user.toLowerCase());
    if (!userFound) {
        return res.send('No tienes los privilegios para ingresar');
    }
    req.adminName = userFound;
    next();
}

module.exports = auth;