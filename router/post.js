const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');


router.get('/', postController.index);

router.post('/create', postController.create);

router.get('/:slug', postController.show);

module.exports = router;