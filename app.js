const express = require('express');
const app = express();

const users = require('./data/db/users.json')
const postRouter = require('./router/post');
const auth = require('./controllers/auth');
const authMdw = require('./middlewares/authentication');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Benvenuto');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(404).send('Credenziali errate')
    };
    const token = auth.generateToken(user);
    res.send(token);
})

app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
})