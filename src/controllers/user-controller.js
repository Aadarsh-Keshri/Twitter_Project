import { StatusCodes } from "http-status-codes";
import UserService from "../services/user-service.js";

const userService=new UserService();

export async function signUp(req,res){
    try {
        const data=req.body;
        const user=await userService.signUp(data);
        return res
                  .status(StatusCodes.OK)
                  .json({
                    success: true,
                    message: 'Successfully created a user',
                    data: user,
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

export async function signIn(req,res){
  try {
      const data=req.body;
      const user=await userService.signIn(data);
      return res
                .status(StatusCodes.OK)
                .json({
                  success: true,
                  message: 'Successfully Signed In as a user',
                  data: user,
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