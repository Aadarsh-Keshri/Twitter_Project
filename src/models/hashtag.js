import mongoose from "mongoose";
import Tweet from "./tweet.js";

const hashTagSchema=new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
});

const HashTag=mongoose.model('HashTag',hashTagSchema);
export default HashTag;