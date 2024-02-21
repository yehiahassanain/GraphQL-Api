const express = require('express');

const feedController = require('../controllers/feed')
const router = express.Router();
// Get/feet/posts
router.get('/posts',feedController.getPosts);
// post/feet/posts
router.post('/post',feedController.createPost);
module.exports = router;