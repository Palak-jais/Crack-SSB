import React from "react";
import Layout from "../../../components/ui/layout";
import {BiSolidUser} from 'react-icons/bi';
export default function Profile(){
    return(
        <>
        <Layout/>
        <div className="flex justify-between p-20 font-mono">
            <div className="">
                
                <h1 className="text-2xl text-blue-700 font-bold">BASIC PROFILE</h1>
                <button  className='bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:opacity-75'>EDIT</button>
                <h1 className="font-semibold mt-5 mb-5">User Name</h1>
                <h2 className="font-semibold mt-5 mb-5">User Tag</h2>
                <h2 className="font-semibold mt-5 mb-5">User Email</h2>
            </div>
            <div>
            <h1 className="text-2xl text-blue-700 font-bold">AVTAR</h1>
            <input className="" type="file" placeholder="user profile"></input>
            </div>
            <div className="">
                <h1 className="text-2xl text-blue-700 font-bold">OTHER INFO</h1>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:opacity-75'>EDIT </button>
                <h2 className="font-semibold mt-5 mb-5">ADDRESS</h2>
                <h2 className="font-semibold mt-5 mb-5">SCHOOL</h2>
                <h2 className="font-semibold mt-5 mb-5">GENDER</h2>

            </div>

        </div>
        </>
    
    )
}