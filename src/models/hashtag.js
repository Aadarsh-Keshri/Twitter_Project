import mongoose from "mongoose";

const hashTagSchema=new mongoose.Schema({
    text: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ]
});

const HashTag=mongoose.model('HashTag',hashTagSchema);
export default HashTag;