"use client"
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Layout from "../../../components/ui/layout";
  export default function Logout(){
    const onLogout=async()=>{
       try{       
           const res=await axios.get("/api/users/logout");
            console.log("sucesss",res.data);
            Swal.fire({
             icon: 'success',
             title: 'Logged Out..',
             confirmButtonColor: '#1e2f97',
             text: 'Logged out sucessfully!',
            
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
   return (
    <>
    <div className="text-center">
    <Layout/>
    <button className='bg-blue-500 text-white text-2xl font-bold px-4 py-2 rounded-md mt-5 hover:opacity-75 m-5' onClick={onLogout}>Log Out</button>
    </div>
    </>
   )
  }
   
