import { NextRequest,NextResponse } from "next/server";
import { connect } from "@/dbcongig/dbconfig";
import User from '@/models/userModel';

connect();
export async function PUT(request:NextRequest){
  try{
        const reqBody=await request.json();
        console.log(reqBody);
        await User.findByIdAndUpdate(reqBody._id,{username:reqBody.name,tag:reqBody.tag,target:reqBody.target,Address:reqBody.address,gender:reqBody.gender},  { new: true });
        console.log("updated");
        return NextResponse.json({message:"working fine"},{status:200});
        
  }
  catch(err:any){
    return NextResponse.json({message:err.message},{status:500});
  }
}