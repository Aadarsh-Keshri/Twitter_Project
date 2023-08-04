import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {JWT_SECRET, SALT_ROUNDS,JWT_EXPIRY} from "../config/server-config.js"
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    name: {
        type: String
    }
});

userSchema.pre('save',function encrypt(next){
    const user=this;
    const salt=bcrypt.genSaltSync(+SALT_ROUNDS);
    const encryptedPassword=bcrypt.hashSync(user.password,salt);
    user.password=encryptedPassword;
    next();
})

userSchema.methods.comparePassword=function compare(password){
    const user=this;
    return bcrypt.compareSync(password,user.password);
}

userSchema.methods.genJWT=function generate(){
    return jwt.sign({
        id: this._id,
        email: this.email
    },JWT_SECRET,{
        expiresIn: JWT_EXPIRY
    });
}

const User=mongoose.model('User',userSchema);
export default User;