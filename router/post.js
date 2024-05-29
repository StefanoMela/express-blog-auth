const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const authMdw = require('../middlewares/authentication');


router.get('/', postController.index);

router.post('/store', authMdw.authProcedure, postController.store);

router.get('/admin',authMdw.authProcedure, authMdw.adminWare, postController.adminPage);

router.get('/:slug', postController.show);

module.exports = router;