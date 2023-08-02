import HashtagService from "../services/hastag-service.js";
import { StatusCodes } from "http-status-codes";

const hashtagService=new HashtagService();

export async function getHashtag(req,res){
    try {
        const data=req.body;
        const hashtag=await hashtagService.getHashtagByName(data);
        return res
                  .status(StatusCodes.OK)
                  .json({
                    success: true,
                    message: 'Successfully retrieved a hashtag',
                    data: hashtag,
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