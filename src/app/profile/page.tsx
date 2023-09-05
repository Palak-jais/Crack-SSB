"use client"
import React, { useEffect,useState } from "react";
import axios from 'axios';
import Layout from "../../../components/ui/layout";
import styles from './profile.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function Profile(){
    const router=useRouter();
    const[id,setId]=useState("");
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[tag,setTag]=useState("");
    const[address,setAdress]=useState("");
    const[target,setTarget]=useState("");
    const[image,setImage]=useState("");
    const[updatedname,setUpdatedName]=useState("");
    const[updatedtag,setUpdatedTag]=useState("");
    const[updatedAddress,setUpdatedAdress]=useState("");
    const[updatedTarget,setUpdatedTarget]=useState("");
    const[updatedImage,setUpdatedImage]=useState(null);
    const getdata=async()=>{
          try{
            const res=await axios.get("/api/users/me");
            console.log(res);
            setId(res.data.data._id);
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
    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        setUpdatedImage(file);
      };
    const submitUpload=async(e:any)=>{
       e.preventDefault();
       try{
        const response = await axios.put(`/api/users/update/`, {_id:id,name:updatedname,tag:updatedtag,target:updatedTarget,address:updatedAddress});
        console.log(response);
        await Swal.fire({
            icon: 'success',
            title: 'Done!',
            text: 'Updated Sucessfully!',
            confirmButtonColor: '#1e2f97',          
          })
        router.refresh();
        router.push('/profile');
       }
       catch(err:any){
        console.error('Error updating field:', err);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            confirmButtonColor: '#1e2f97',
            text: "something went wrong",
          })
       }

    }
    const uploadImage=async(e:any)=>{
        e.preventDefault();
        if (!updatedImage) {
          alert('Please select a file');
          return;
        }
        // Use FormData to create a form with the selected file
        //console.log(updatedImage);
        const formData =await new FormData();
        formData.append('image', updatedImage);
        //console.log(formData);
        try{
           const response = await axios.put(`/api/users/updateAvtar/`, {_id:id,profileImage:formData});
            console.log(response);
            await Swal.fire({
                icon: 'success',
                title: 'Done!',
                text: 'Updated Sucessfully!',
                confirmButtonColor: '#1e2f97',          
              })
            router.refresh();
            router.push('/profile');
           }
           catch(err:any){
            console.error('Error updating field:', err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#1e2f97',
                text: "something went wrong",
              })
           }
    }

    return(
        <>
        <Layout/>
        <div className=" flex justify-between p-20 m-20 font-mono">
        <div>
        <img
        className={styles.userIcon}
        src={`data:image/jpeg;base64,${image}`}
        alt="Img"
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
            <div className=''>     
               <Popup trigger={<button  className='bg-blue-500 text-white px-2 py-2 m-5 rounded-md float-right hover:opacity-75 '>EDIT YOUR PROFILE</button>} 
               modal>
              <div className="">
              <input type="text" className="p-2 m-2 font-bold border border-solid rounded-lg border-gray-400 border-2" placeholder="Enter your name" name='name' 
              onChange={(e)=>setUpdatedName(e.target.value)}
              ></input>
                <input required type="text" className="p-2 m-2 font-bold border border-solid rounded-lg border-gray-400 border-2" placeholder="Enter your tag" name='tag'
                onChange={(e)=>setUpdatedTag(e.target.value)}
                ></input>
                <input required type="text" className="p-2 m-2 font-bold border border-solid rounded-lg border-gray-400 border-2" placeholder="Enter your target" name='target'
                onChange={(e)=>setUpdatedTarget(e.target.value)}
                ></input>
                <input required type="text" className="p-2 m-2 font-bold border border-solid rounded-lg border-gray-400 border-2"  placeholder="Enter your Address" name='address'
                onChange={(e)=>setUpdatedAdress(e.target.value)}
                ></input>
              </div>
              <button className='w-100 bg-blue-500 text-white px-4 py-2  rounded-md ml-5 hover:opacity-75' onClick={submitUpload}>UPDATE</button>
             </Popup>
             <div>
            <Popup trigger={<button  className='bg-blue-500 text-white px-2 py-2 m-5 rounded-md float-right hover:opacity-75'>UPLOAD YOUR AVTAR</button>} 
               modal>
              <div className="">
              <input type="file" accept="image/*" className="p-2 m-2 font-bold" placeholder="upload" name='avtar' onChange={handleFileChange}></input>
              </div>
              <button className='bg-blue-500 text-white px-4 py-2  rounded-md ml-5 hover:opacity-75' onClick={uploadImage}>UPDATE</button>
             </Popup>
            </div>
            </div>          
        </div>

        </>
    
    )
}