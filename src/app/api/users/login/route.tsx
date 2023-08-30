import { connect } from "@/dbcongig/dbconfig";
import User from '@/models/userModel';
import { NextRequest,NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
try{
    const reqBody=await request.json()
    const {email,password}=reqBody;
    console.log(reqBody);

    const user=await User.findOne({email});
    console.log(user);
    if(!user){
        return NextResponse.json({error:"User not exists"},{status:400})
    }
    console.log(user.email);
    /*
    if(user.password!=password){
        return NextResponse.json({error:"Incorrect password"},{status:400})
    }
    */
    console.log(user.password);
    console.log("LogggedIn Sucessfull");
    return NextResponse.json({message:"User logged In"},{status:201})
}
catch(err:any){
    console.log(err);
    return NextResponse.json({error:err.message},{status:500})
}    
}
