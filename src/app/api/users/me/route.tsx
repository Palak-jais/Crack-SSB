import { getDataFromToken } from "@/dbcongig/getData";

 import { NextRequest,NextResponse } from "next/server";
 import User from "@/models/userModel";
 import { connect } from "@/dbcongig/dbconfig";
 connect();
 export async function GET(request:NextRequest) {
    try{
        const userID=await getDataFromToken(request);
        const user=await User.findOne({_id:userID}).select("-password ");
        return NextResponse.json({
            message:"user found",
            data:user
        })
            
    }catch(err:any){
          return NextResponse.json({err:err.message},
            {status:400})
    }
 }