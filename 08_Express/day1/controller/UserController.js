import UserModel from "../models/UserModel.js";

// -> login , register, update password, update profile, logout, get all user, 

const LoginContoller = async (req, res) => {
    try{


    }catch(e){
        console.log(e.message);
        
    }
}

const RegisterController = async (req, res) => {
    try{
        const {username , email, password} = req.body;

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