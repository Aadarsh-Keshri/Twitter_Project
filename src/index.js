import express from "express";
import {connect} from "./config/database.js"
import Tweet from "./models/tweet.js";
import HashTag from "./models/hashtag.js";
import { PORT } from "./config/server-config.js";

const app=express();

app.listen(PORT,async ()=>{
    console.log(`Started the server at PORT:${PORT}`);
    //mongo db connection establishment
    connect();
    Tweet.create({
        content: "Waazzzupppp",
        likes: 25,
        noOfRetweets: 5,
        comment: "Yo Yo Yo!!!"
    })
    // HashTag.create({
    //     text: "travel",
    //     tweets: ['64c4d4bcb8124afabdb0eea3']
    // })
    console.log('Mongo DB connected')
})