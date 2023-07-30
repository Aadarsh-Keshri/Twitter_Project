import { StatusCodes } from "http-status-codes";
import TweetService from "../services/tweet-service.js";

const tweetService=new TweetService();

export async function createTweet(req,res){
    try {
        const data=req.body;
        const tweet=await tweetService.createTweet(data);
        return res
                  .status(StatusCodes.CREATED)
                  .json({
                    success: true,
                    message: 'Successfully created a tweet',
                    data: tweet,
                    err: {}
                  });
    } catch (error) {
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({
                    success: false,
                    message: 'Error Encountered',
                    data: {},
                    err: error
                  });
    }
}

export async function getTweet(req,res){
    try {
        const tweet=await tweetService.getTweet(req.params.id);
        return res
                  .status(StatusCodes.OK)
                  .json({
                    success: true,
                    message: 'Successfully retrieved a tweet',
                    data: tweet,
                    err: {}
                  });
    } catch (error) {
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({
                    success: false,
                    message: 'Error Encountered',
                    data: {},
                    err: error
                  });
    }
}