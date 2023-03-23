const controller = {
    index: (req, res) => {
        res.render('index', { user: req.session.user });
    },
    login: (req, res) => {
        const user = {
            name: req.body.name,
            color: req.body.color,
            email: req.body.email,
            age: req.body.age
        };
        req.session.user = user;
        if (req.body.remember) {
            res.cookie('user_email', user.email);
        }
        res.redirect('/dashboard');
    },
    dashboard: (req, res) => {
        const { user } = req.session;
        res.send(`hola ${user.name}`);
    }
};

module.exports = controller;