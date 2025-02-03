import { verify } from "crypto";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    verifyOtp: {
        type: String,
        required: true,
        default: '',
    },
    verifyOtpExpireAt: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetOtp: {
        type: String,
        default: '',
    },  
    resetOtpExpireAt: {
        type: Number,
        default: 0,
    },
 });
 const User =mongoose.models.user || mongoose.model('User', userSchema);
    export default Usermodel;