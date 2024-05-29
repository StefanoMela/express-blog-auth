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
        return res.status(401).send('Non sei autenticato')
    }

    const token = authorization.split('')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send(err);
        }

        req.user = user;
        console.log(req.user);
        next();
    });
}


module.exports = {
    authProcedure,
}