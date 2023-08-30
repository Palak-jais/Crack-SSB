import mongoose from "mongoose";
const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:[true,"Please provide username"],
        
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:true,  
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isCourse:{
        type:String,
    },
    tag:{
        type:String,
        default:"Ex-Conference out"
    },
    gender:{
        type:String,
        default:"Gender"
    },
    Address:{
        type:String,
        default:"Ex-Pune,Maharashtra"
    },

})
const User=mongoose.model("users",userSchema);

export default User;
