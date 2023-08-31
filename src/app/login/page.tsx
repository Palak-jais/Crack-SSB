"use client"
import React, { useState } from "react";
import Layout from "../../../components/ui/layout";
import axios from "axios";
import Swal from "sweetalert2";
export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onLogin=async(e:any)=>{
      e.preventDefault();
       try{       
           const res=await axios.post("/api/users/login",{email,password});
            console.log("sucesss",res.data);
            Swal.fire({
             icon: 'success',
             title: 'Congratulations..',
             confirmButtonColor: '#1e2f97',
             text: 'Signed In!',
            
           })
       }catch(error:any){
           console.log(error);
           Swal.fire({
             icon: 'error',
             title: 'Oops...',
             confirmButtonColor: '#1e2f97',
             text: `${error.response.data.message}`,
           })
       }
   }
    return(
        <>
        <Layout/>
        <div className="align-center">
            <div className="flex items-center justify-center h-screen text-md w-60vw">
                <form className="p-5 w-80">
                <h1 className="text-center text-xl text-blue-500 font-bold ">LOGIN HERE 🎯</h1>
                 <input
                   className=" font-bold w-full py-2 px-4  mt-4 mb-4 border border-solid rounded-lg  border-gray-400 border-2"
                   type="email"
                   name="email"
                 onChange={(e)=>setEmail(e.target.value)}
                  />
                <input
                className=" font-bold w-full py-2 px-4 mt-4 mb-4 border border-solid rounded-lg border-gray-400 border-2"
                 type="password"
                 name="password"
                 placeholder="Enter your password"
                 onChange={(e)=>setPassword(e.target.value)}
                  />
                  <div className="text-center">
                    <button onClick={onLogin} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:opacity-75">LOGIN</button>
                  </div>
                </form>
            </div>
        </div>
        </>

    )
}