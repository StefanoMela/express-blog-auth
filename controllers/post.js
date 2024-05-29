const posts = require('../data/db/posts.json');


const index = (req, res) => {
    res.send(posts)
}

const create = (req, res) => {
    res.send('Complimenti, sei loggato e puoi postare');
}

const show = (req, res) => {
    const requestedSlug = req.params.slug;
    const requestedPost = posts.find(post => post.slug === requestedSlug);
    res.send(requestedPost)
}

const adminPage = (req, res) => {
    res.send('Ora si che sei un SuperUser!')
}


module.exports = {
    index,
    create,
    show,
    adminPage,
}