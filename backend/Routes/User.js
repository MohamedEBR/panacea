/* eslint-disable no-undef */
import express from 'express';

//user Controls
import {UserLogin, UserSignUp} from '../Controllers/Usercontroller.js'

const router = express.Router();    

//Login
router.post('/login', UserLogin)

//Signup
router.post('/signup', UserSignUp)

module.exports = router;