const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

router.get('/', PostsController.getAllPosts);
router.get('/autor/:idAutor', PostsController.getPostsAutor);
router.post('/', PostsController.createPost);

module.exports = router;