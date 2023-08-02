import express from 'express';
import { createTweet,getTweet } from '../controllers/tweet-controller.js';
import { getHashtag } from '../controllers/hashtag-controller.js';

const router=express.Router();

router.post('/tweet',createTweet);
router.get('/tweet/:id',getTweet);

router.get('/hashtag',getHashtag);

export default router;