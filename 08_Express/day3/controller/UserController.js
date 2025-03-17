import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
// -> login , register, update password, update profile, logout, get all user, 
const LoginContoller = async (req, res) => {
    try{

        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }
        const token = jsonwebtoken.sign({id: user._id, email: user.email}, process.env.SECURE, {expiresIn: "1d"});
        res.status(200).json({user, token, message: "User logged in successfully"});


    }catch(e){
        console.log(e.message);
        
    }
}

const RegisterController = async (req, res) => {
    try{
        const {username , email, password, confiermPassword} = req.body;
        if(password !== confiermPassword){
            return res.status(400).json({message: "Password does not match"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await UserModel.create({username, email, password: hashedPassword});
        res.status(200).json({user, message: "User created successfully"});
    }catch(e){
        console.log(e.message);
    }
}

const UpdatePasswordController = async (req, res) => {
    try{

    }catch(e){
        console.log(e.message);
    }
}

const UpdateProfileController = async (req, res) => {
    try{

    }catch(e){
        console.log(e.message);
    }
}

const LogoutController = async (req, res) => {
    try{

    }catch(e){
        console.log(e.message);
    }
}

const GetAllUserController = async (req, res) => {
    try{}

    catch(e){
        console.log(e.message);
    }
}

export {
    LoginContoller,
    RegisterController,
    UpdatePasswordController,
    UpdateProfileController,
    LogoutController,
    GetAllUserController
};