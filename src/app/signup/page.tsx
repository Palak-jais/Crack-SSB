"use client"
import React, { useState } from "react";
export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[username,setUsername]=useState("");
    return(
        <>
        <div className="align-center">
            <div className="flex items-center justify-center h-screen text-md w-60vw">
                <form className="p-5 w-80">
                <h1 className="text-center text-xl text-blue-500 font-bold ">SIGN UP HERE 🎯</h1>
                <input
                 className=" font-bold w-full py-2 px-4  mt-4 mb-4 border border-solid rounded-lg  border-gray-400 border-2"
                 type="text"
                 name="username"
                 placeholder="Enter your Username"
                 onChange={(e)=>setEmail(e.target.value)}
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
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:opacity-75">SIGN UP</button>
                  </div>
                </form>
            </div>
        </div>
        </>

    )
}