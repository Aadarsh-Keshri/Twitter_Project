import LikeRepository from "../repositories/like-repository.js";
import TweetRepository from "../repositories/tweet-repository.js";

class LikeService{

    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){

        try {
            let likeable;
            if(modelType === 'Tweet'){
                likeable=await this.tweetRepository.getTweet(modelId);
            }
            else if(modelType === 'Comment'){
                //Todo
            }
            else{
                console.log("Wrong modelType")
            }
            let isAdded;
            const exists=await this.likeRepository.findByUserAndLike({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            if(exists){
                //todo
                likeable.likes.pull(exists.id);
                await likeable.save();
                this.likeRepository.destroy(exists.id);
                isAdded=false;
                return isAdded;
            }
            else{
                const newLike=await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    likeable: modelId
                });
                likeable.likes.push(newLike);
                await likeable.save();
                isAdded=true;
                return isAdded;
            }
        } catch (error) {
            throw error;
        }

    }
}

export default LikeService;