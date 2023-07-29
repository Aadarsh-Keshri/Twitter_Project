import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "./server-config.js";

export const connect=async ()=>{
    await mongoose.connect(DB_CONNECTION_STRING);
}