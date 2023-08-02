import HashtagRepository from "../repositories/hashtag-repository.js";

class HashtagService{
    constructor(){
        this.hashtagRepository=new HashtagRepository();
    }
    async getHashtagByName(data){
        try {
            const name=data.name;
            const hashtag=await this.hashtagRepository.getHashtagByName(name);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;                   
        }
    }
}

export default HashtagService;