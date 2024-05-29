const posts = require('../data/db/posts.json');
const users = require('../data/db/users.json');


const index = (req, res) => {
    res.send(posts)
}

const create = (req, res) => {

}

const show =  (req, res) => {
    const requestedSlug = req.params.slug;
    const requestedPost = posts.find(post => post.slug === requestedSlug);
    res.send(requestedPost)
}


module.exports = {
    index,
    create,
    show,
}