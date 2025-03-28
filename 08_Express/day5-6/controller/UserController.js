import UserModel from "../models/UserModel.js";
import UserTokenModel from "../models/UserTokenModel.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

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
        const userToken = await UserTokenModel.create({userId: user._id, token});
        res.status(200).json({
            email: user.email, 
            username: user.username, 
            is_Verified: user.isVerified, 
            role: user.role, 
            user_id: user._id,
            token, 
            message: "User logged in successfully"});
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
        const {password, confiermPassword} = req.body;
        if(password !== confiermPassword){
            return res.status(400).json({message: "Password does not match"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await UserModel.findByIdAndUpdate(req.user.id, {password: hashedPassword});
        res.status(200).json({message: "Password updated successfully"});
    }catch(e){
        console.log(e.message);
    }
}
const ProfileController = async(req, res) =>{
    try{
        res.status(200).json(req.user)
    }catch(e){
        res.status(400).json({message: "somethign went wrong "})
    }
}
const UpdateProfileController = async (req, res) => {
    try{
        const {email, username } = req.body;
        const user = await UserModel.findByIdAndUpdate(req.user.id, {email, username});
        res.status(200).json({
            success: true,
            user, 
            message: "Profile updated successfully"
        });

    }catch(e){
        console.log(e.message);
    }
}

const LogoutController = async (req, res) => {
    try{
        const {token} = req.headers;
        // split token
        const splitToken = token.split(" ")[1];
        const decoded = jsonwebtoken.verify(splitToken, process.env.SECURE);
        req.user = decoded;
        const userToken = await UserTokenModel.findOneAndDelete({userId: req.user.id});
        res.status(200).json({message: "User logged out successfully"});

    }catch(e){
        console.log(e.message);
    }
}

const GetAllUserController = async (req, res) => {
    try{
        const user = await UserModel.find();
        res.status(200).json(
            {
            success: true,
            user, 
            message: "User fetched successfully"
            }
        );
    }

    catch(e){
        console.log(e.message);
    }
}

const client = new OAuth2Client(process.env.CLIENT_ID);

const GooogleLoginController = async (req, res) => {
    const { id_token } = req.body;
    if (!id_token) {
        return res.status(400).json({ message: "Invalid token" });
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name } = payload;

        let user = await UserModel.findOne({ email });

        // ✅ Auto-create user if not found
        if (!user) {
            user = await UserModel.create({
                email,
                username: name || email.split('@')[0],
                isVerified: true,
                role: "user", // default role
            });
        }

        // Generate JWT token
        const token = jsonwebtoken.sign(
            { id: user._id, email: user.email },
            process.env.SECURE,
            { expiresIn: "10d" }
        );

        // Save token to DB
        await UserTokenModel.create({ userId: user._id, token });

        // Send user info back
        res.status(200).json({
            email: user.email,
            username: user.username,
            is_Verified: user.isVerified,
            role: user.role,
            user_id: user._id,
            token,
        });
    } catch (e) {
        console.log("Google Login Error:", e.message);
        res.status(500).json({ message: "Google login failed" });
    }
};


export {
    LoginContoller,
    RegisterController,
    UpdatePasswordController,
    UpdateProfileController,
    LogoutController,
    GetAllUserController,
    GooogleLoginController,
    ProfileController,
};