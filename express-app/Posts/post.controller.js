var express = require('express');
var router = express.Router();
const postsService = require('./post.services');

// GET /posts/
router.get('/', (req, res) => res.send(postsService.getAllPosts()));

// GET /posts/1
router.get('/:id', (req, res) => res.send(postsService.findPostByIndex(req.params.id)))

// POST /posts
router.post('/', (req, res) => {
    const post = postsService.createPost(req.body);
    if (!post) res.status(500).send();
    res.status(201).json(post);
});

// PUT /posts
router.put('/:id', (req, res) => {
    const post = postsService.updatePost(req.params.id, req.body);
    if (!post) res.status(404).send();
    res.status(200).send(post);
});

// DELETE /posts/1
router.delete('/:id', (req, res) => {
    const post = postsService.deletePost(req.params.id);
    if (!post) res.status(404).send();
    res.status(200).send();
});

module.exports = router;