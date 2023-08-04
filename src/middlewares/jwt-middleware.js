import JWT from "passport-jwt";
import User from "../models/user.js";
import {JWT_SECRET} from "../config/server-config.js"

const JwtStrategy=JWT.Strategy;
const ExtractionJwt=JWT.ExtractJwt;

const opts={
    jwtFromRequest: ExtractionJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
}

export const passportAuth=(passport)=>{
    passport.use(new JwtStrategy(opts,async (jwt_payload,done)=>{
        const user=await User.findById(jwt_payload.id);
        if(!user){
            done(null,false);
        }
        else{
            done(null,user);
        }
    }));
}
