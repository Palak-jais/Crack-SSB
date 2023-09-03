"use client"
import React, { useState} from "react";
import axios from "axios";
import Layout from "../../../components/ui/layout";
import Swal from "sweetalert2";
export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[username,setUsername]=useState("");
    const onSignup=async(e:any)=>{
     e.preventDefault();
      try{       
          const res=await axios.post("/api/users/signup",{username,email,password});
           console.log("sucesss",res.data);
           Swal.fire({
            icon: 'success',
            title: 'Congratulations..',
            text: 'Signed In!',
            confirmButtonColor: '#1e2f97',
           
          })
      }catch(error:any){
        console.log(error);
          console.log("signup failed",error.message);
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
        <div className="align-center">
          <Layout/>
            <div className="flex items-center justify-center h-screen text-md w-60vw">
                <form className="p-5 w-80">
                <h1 className="text-center text-xl text-blue-500 font-bold ">SIGN UP HERE 🎯</h1>
                <input
                 className=" font-bold w-full py-2 px-4  mt-4 mb-4 border border-solid rounded-lg  border-gray-400 border-2"
                 type="text"
                 name="username"
                 placeholder="Enter your Username"
                 onChange={(e)=>setUsername(e.target.value)}
                  />
                 <input
                 className=" font-bold w-full py-2 px-4  mt-4 mb-4 border border-solid rounded-lg  border-gray-400 border-2"
                 type="email"
                 name="email"
                 placeholder="Enter your email"
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
                    <button onClick={onSignup} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:opacity-75">SIGN UP</button>
                  </div>
                </form>
            </div>
        </div>
        </>

    )
}