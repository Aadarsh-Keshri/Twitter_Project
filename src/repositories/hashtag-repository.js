import HashTag from '../models/hashtag.js'

class HashtagRepository{
    async create(data){
        try {
            let hashtag=await HashTag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkCreate(data){
        try {
            let tags=await HashTag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getHashtagByName(text){
        try {
            let hashtag=await HashTag.find({
                text: text
            });
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getHashtag(id){
        try {
            let hashtag=await HashTag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag(data){
        try {
            let response=await HashTag.deleteOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default HashtagRepository;