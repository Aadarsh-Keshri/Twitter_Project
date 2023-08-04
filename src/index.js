import express from "express";
import {connect} from "./config/database.js"
import { PORT } from "./config/server-config.js";
import router from "./routes/index.js";
import passport from "passport";
import { passportAuth } from "./middlewares/jwt-middleware.js";

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api',router);


app.listen(PORT,async ()=>{
    console.log(`Started the server at PORT:${PORT}`);
    //mongo db connection establishment
    connect();
    // Tweet.create({
    //     content: "Waazzzupppp",
    //     likes: 25,
    //     noOfRetweets: 5,
    //     comment: "Yo Yo Yo!!!"
    // })
    // HashTag.create({
    //     text: "yolo",
    //     tweets: ['64c4d4bcb8124afabdb0eea3']
    // })
    // const hashtagRepo=new HashtagRepository();
    // let tags=await hashtagRepo.getHashtagByName(["travel","yolo"]);
    // console.log(tags);
    console.log('Mongo DB connected')
})