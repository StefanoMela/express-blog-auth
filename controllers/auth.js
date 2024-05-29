const users = require('../data/db/users.json')
const { generateToken } = require('../utils/jwt');

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(404).send('Credenziali errate')
    };
    const token = generateToken(user);
    res.send(token);
}

module.exports = {
    login
}