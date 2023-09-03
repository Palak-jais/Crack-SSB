import { connect } from "@/dbcongig/dbconfig";
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest,NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
try{
    const reqBody=await request.json()
    const {username,email,password}=reqBody
    //console.log(reqBody);

    const u=await User.findOne({username});
    if(u){
        return NextResponse.json({message:"User name exists"},{status:400})
    }

    const user=await User.findOne({email});
    if(user){
        return NextResponse.json({message:"Email exists"},{status:400})
    }
    

    const salt=await bcryptjs.genSalt(10)
    const hashPassword=await bcryptjs.hash(
        password.toString(),salt)
    
        const newUser=new User({
            username,
            email,
            password:hashPassword
        })       
        await newUser.save();
        return NextResponse.json({message:"User created"},{status:201})
}
catch(err:any){
    //console.log(err);
    return NextResponse.json({message:"something went wrong"},{status:500})
}    
}
