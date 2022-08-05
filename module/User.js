const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

module.exports.registerUser = async (req,res,next) => {
    try{
        const encryptedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:encryptedPassword
        })
        let user = await newUser.save()
        const token = await jwt.sign(
            {user_id:req.body.email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        )
        user = {
            _id:user._id,
            username:user.username,
            email:user.email,
            isActive:user.isActive,
            password:user.password,
            __v:user.__v,
            token:token
        }
        res.status(200).send(user)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports.loginUser = async (req,res,next) => {
    try{
        let user = await User.findOne({email: req.body.email})
        !user && res.status(404).json("User not found")
        const correctPassword = await bcrypt.compare(req.body.password,user.password)
        !correctPassword && res.status(400).json("Incorrect password")
        const token = await jwt.sign(
            {user_id:req.body.email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        )
        user = {
            _id:user._id,
            username:user.username,
            email:user.email,
            isActive:user.isActive,
            password:user.password,
            __v:user.__v,
            token:token
        }
        res.status(200).send(user)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}