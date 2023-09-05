"use client"
import React, { useEffect,useState } from "react";
import axios from 'axios';
import Layout from "../../../components/ui/layout";
import {BiSolidUser} from 'react-icons/bi';
import styles from './profile.module.css';
export default function Profile(){
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[tag,setTag]=useState("");
    const[address,setAdress]=useState("");
    const[target,setTarget]=useState("");
    const[image,setImage]=useState("");
    const getdata=async()=>{
          try{
            const res=await axios.get("/api/users/me");
            console.log(res);
            setEmail(res.data.data.email);
            setName(res.data.data.username);
            setTag(res.data.data.tag);
            setAdress(res.data.data.Address);
            setGender(res.data.data.gender);
            setTarget(res.data.data.target);
            setImage(res.data.data.profileImage);
          }
          catch(err:any){
              console.log('error',err);
          }
    }
    useEffect(()=>{
        getdata();
    },[]);
    return(
        <>
        <Layout/>
        <button  className='bg-blue-500 text-white px-4 py-2 m-20 rounded-md float-right hover:opacity-75'>EDIT YOUR PROFILE</button>
        <div className=" flex justify-between p-20 m-20 font-mono">
        <div>
        <img
        className={styles.userIcon}
        src={`data:image/jpeg;base64,${image}`}
        alt="User's Image"
      />
           
            <h1 className={styles.name}>{name}</h1>
            </div>
            <div className="">             
                <h1 className="text-2xl text-blue-700 font-bold">BASIC PROFILE</h1>
                <h2 className="font-semibold mt-5 mb-5">Email:<span className="text-l text-[#808080]">{email}</span></h2>
                <h2 className="font-semibold mt-5 mb-5">Tag:<span className="text-l text-[#808080]">{tag}</span></h2>
                <h2 className="font-semibold mt-5 mb-5">Target:<span className="text-l text-[#808080]">{target}</span></h2>
                <h2 className="font-semibold mt-5 mb-5">Address:<span className="text-l text-[#808080]">{address}</span></h2>
                <h2 className="font-semibold mt-5 mb-5">Gender:<span className="text-l text-[#808080]">{gender}</span></h2>
            </div>

        </div>
        </>
    
    )
}