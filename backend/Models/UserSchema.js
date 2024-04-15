/* eslint-disable no-undef */
import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
type: String,
required: [true, "Your username is required"],
    } ,
    email:{
        type: String,
        required: [true, "Your email is required"],
        unique: true,
            },
    password:{
        type: String,
        required: [true, "Your password is required"],
            },
    
})

module.exports = mongoose.model('UserSchema', userSchema);