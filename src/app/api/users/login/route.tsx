import { connect } from "@/dbcongig/dbconfig";
import User from '@/models/userModel';
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect();

export async function POST(request:NextRequest) {
try{
    const reqBody=await request.json()
    const {email,password}=reqBody;
    console.log(reqBody);

    const user=await User.findOne({email});
    console.log(user);
    if(!user){
        return NextResponse.json({message:"User not exists"},{status:400})
    }
    console.log(user.email);
   const userPassword:any=user.password;
   const validPassword= await bcryptjs.compare(password,userPassword);
   console.log(validPassword);
   if(!validPassword){
       return NextResponse.json({message:"Incorrect password"},{status:400});
   }
    console.log(user.password);
    console.log("LogggedIn Sucessfull");
    const tokenData={
        id:user._id,
        username:user.username,
        email:user.email
    }
    
    const token=await jwt.sign(tokenData,process.env.JWT_SECRET_TOKEN!,{
        expiresIn:"1d"
    })
    const resp = NextResponse.json({message:"User logged In"},{status:201});
    resp.cookies.set("token",token,{
        httpOnly:true,
    })
     return resp;  
}
catch(err:any){
   // console.log(err);
    return NextResponse.json({message:"something went wrong"},{status:500})
}    
}
