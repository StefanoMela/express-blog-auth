const jwt = require("jsonwebtoken");
require("dotenv").config();
const users = require('../data/db/users.json');

/***
* 1 - Verifico che l'utente abbia un token
* 2 - Recupero il token
* 3 - Verifico token / gestisco errori
* 4 - next()
*/

const authProcedure = (req, res, next) => {
    // const {authorization} = req.header è uguale a:
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            error: "401",
            message: "Non hai i permessi necessari"
        });

    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: "403",
                message: "Token scaduto"
            });
        }

        req.user = user;

        next();
    });
}

const adminWare = (req, res, next) => {
    const { username, password } = req.user;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user || !user.admin) {
        return res.status(403).json({
            error: "403",
            message: "Devi essere admin per poterlo fare!"
        });
    }
    next();
}

module.exports = {
    authProcedure,
    adminWare
}