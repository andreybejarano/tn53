const controller = {
    getUsers: (req, res) => {
        res.send('Usuarios');
    },
    register: (req, res) => {
        res.send('Register');
    }
}

module.exports = controller;