const express = require('express');
const app = express();
const postRouter = require('./router/post');
const authRouter = require('./router/auth');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Benvenuto');
});

app.use(authRouter)
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
})