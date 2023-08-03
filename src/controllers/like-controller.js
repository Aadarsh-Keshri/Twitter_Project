import { StatusCodes } from "http-status-codes";
import LikeService from "../services/like-service.js";

const likeService=new LikeService();

export async function toggleLike(req,res){
    try {
        const data=req.body;
        const response=await likeService.toggleLike(data.modelId,data.modelType,data.userId);
        return res
                  .status(StatusCodes.OK)
                  .json({
                    success: true,
                    message: 'Successfully toggled a Like',
                    data: response,
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