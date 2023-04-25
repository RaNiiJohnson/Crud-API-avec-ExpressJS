const {
    setPost,
    getPost,
    editPost,
    deletePost,
    likePost,
    dislikePost
} = require('../controllers/post.controller')

const router = require('express').Router()

router.get('/', getPost)

router.post('/', setPost)

router.put('/:id', editPost)

router.delete('/:id', deletePost)

router.patch('/like-post/:id', likePost)

router.patch('/dislike-post/:id', dislikePost)

module.exports = router
