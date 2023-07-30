import TweetRepository from "../repositories/tweet-repository.js";
import HashtagRepository from "../repositories/hashtag-repository.js";
class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    /**
     * data={
     *     content: "Waazzzupppp",
     *     likes: 25,
     *     noOfRetweets: 5,
     *     comment: "Yo Yo Yo!!!"
     * } 
     */
    async createTweet(data){
        const content=data.content;
        //get hashtags without hash sign
        const tags=content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=>tag.substring(1).toLowerCase());
        //storing the tweet
        const tweet=await this.tweetRepository.create(data);

        //storing the hashtag. tags=newTags+alreadyPresentTags.text
        let alreadyPresentTags=await this.hashtagRepository.getHashtagByName(tags);
        let textOfPresentTags=alreadyPresentTags.map((tag) => tag.text);
        let newTags=tags.filter((tags)=> !textOfPresentTags.includes(tags));
        newTags=newTags.map((tag)=>{
            return {
                text: tag,
                tweets: [tweet.id]
            }
        });

        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })

        return tweet;
    }

    async getTweet(tweetId){
        const tweet=await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }
}

export default TweetService;