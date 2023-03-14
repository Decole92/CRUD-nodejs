import express from 'express'
import {getPosts, createPosts, getPost, updatePost, deletePost} from '../controllers/posts.mjs'

const router = express.Router();

//to get all the posts localhost:8000/posts
router.get('/', getPosts);


//Create a post using Postman json format
router.post('/', createPosts);

// Get single Post using the postId localhost:8000/posts/Id
router.get('/:id', getPost);

//Update single post using postman or insomnia 
router.patch('/:id',  updatePost);

//Delete a single post using postman or insomnia by postId localhost:8000/posts/Id
router.delete('/:id', deletePost);

export default router;