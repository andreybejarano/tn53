function verify(req, res, next) {
    if (!req.cookies.user_email) {
        delete req.session.user;
        return res.redirect('/');
    } 
    next();
}

module.exports = verify;