/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import userSchema from '../Models/UserSchema.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

//Signup
const UserSignup = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;

    if(!username){
        throw Error("Please enter your username")
    }
    if(!email){
        throw Error("Please enter your email")
    }
    if(!password){
        throw Error("Please enter your password")
    }
    if(!confirmPassword){
        throw Error("Please confirm your password")
    }
    
    UserSignup.findOne({email:email}).then(
        async (user) =>{
            if(user){
                return res.status(400).json({error: "This email already exists"})

            }else {
                const user = new userSchema ({
                    username: username,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                user.password = hash;
                user.save().then(
                    (response)=>{
                        res.status(200).json({
                            success: true,
                            result: response
                        })
                    }
                ).catch((e) => {
                    res.status(500).json({
                        success: false,
                        error: e
                    })
                })
            }
        }
    )
}

//Login Logic
const userLogin = (req, res) => {
    const { email, password } = req.body
    if(!email){
        throw Error("Please enter your email")
    }
    if(!password){
        throw Error("Please enter your password")
    }

    UserSignup.findOne({email: email}).then(
        (user) => {
            if(!user){
                return res.status(404).json({error: "This email does not exist"})
            }
            else {
                bcrypt.compare(password, user.password, (err, data) =>{
                    if(err){
                        throw err
                    }
                    if (data) {
                        return res.status(200).json({msg: "Login Success"})
                    } else {
                        return res.status(401).json({msg: "Invalid Password"})
                    }
                })
            }
        }
    ).catch((err) => {
        res.status(500).json({
            success: false,
            error: err
        })
    })
}

module.exports = {UserSignup, userLogin}