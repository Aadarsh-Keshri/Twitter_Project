import express from 'express';
import { createTweet,getTweet } from '../controllers/tweet-controller.js';
import { getHashtag } from '../controllers/hashtag-controller.js';
import { signUp, signIn } from '../controllers/user-controller.js';
import { toggleLike } from '../controllers/like-controller.js';

const router=express.Router();

router.post('/tweet',createTweet);
router.get('/tweet/:id',getTweet);


router.get('/hashtag',getHashtag);

router.post('/signUp',signUp);
router.post('/signIn',signIn);

router.post('/likes/toggle',toggleLike)

export default router;