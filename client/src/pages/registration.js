import React, { useState } from 'react'
import abi from "../utils/abi.json";
import {prepareWriteContract, writeContract, waitForTransaction} from 'wagmi/actions';
import { useStorageUpload } from "@thirdweb-dev/react";
import { toast } from 'react-toastify';
import { contractAddress } from '@/utils/constants';
import Image from 'next/image';
// import { upload } from "thirdweb/storage"

function registration() {
    const [role, setRole] = useState(1);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [image, setImage] = useState();

    const { mutateAsync: upload } = useStorageUpload();

    const onChangeImage = async(e) => {
        const file = e.target.files[0];
        // toast.info("uploading image....")
        const id = toast.loading("uploading image....")
            const dataToUpload = [file]
            const uri = await upload({data:dataToUpload})
            const ipfsUri = uri.toString();
            const mainUri = ipfsUri.replace('ipfs://', 'https://ipfs.io/ipfs/')
            console.log("this is uri:",mainUri);
            setImage(mainUri);
            // toast.success("Image ulploaded successfully");
            toast.update(id, {
                render: "Image uploaded successfully",
                type:"success",
                isLoading: false,
                autoClose: 1000,
                closeButton: true,
            })

    }


    const uploadMetadata = async() =>{
        const obj = {
            firstName: `${firstName}`, 
            lastName: `${lastName}`, 
            fullName: `${lastName} ${firstName}`,
            phone: `${phone}`,
            email: `${email}`,
            image: `${image}`,
         }
        const metadata = [obj]; 
        const uri = await upload({ data: metadata });
        console.log("Extracted cid:", uri);
        const ipfsUri = uri.toString();
        const mainUri = ipfsUri.replace('ipfs://', 'https://ipfs.io/ipfs/')
        console.log("metaUri:",mainUri);
        return mainUri

    }
    const Register = async() => {
        const metadataUri = await uploadMetadata();
        console.log("metaUri during upload:",metadataUri);
        if(metadataUri){
            if(role == 1){
                const id = toast.loading("Registering as donor...")
                try{
                    const {request} = await prepareWriteContract({
                        address: contractAddress,
                        abi: abi,
                        functionName: 'donorRegistration',
                        args: [metadataUri]
                    })
                    const {hash} = await writeContract(request);
                    await waitForTransaction({
                        hash,
                    })
                    if(hash.length > 0){
                        toast.update(id, {
                            render: "Registered as donor",
                            type:"success",
                            isLoading: false,
                            autoClose: 1000,
                            closeButton: true,
                        })
                    }

                }catch(error){
                    console.log(error);
                    toast.update(id,{
                        render: `${error.message}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 2000,
                        closeButton: true,
                    })

                }
            }
            else if(role == 2){
                const id = toast.loading("Registering as courier...")
                try{
                    const {request} = await prepareWriteContract({
                        address: contractAddress,
                        abi: abi,
                        functionName: 'courierRegistration',
                        args: [metadataUri]
                    })
                    const {hash} = await writeContract(request);
                    await waitForTransaction({
                        hash,
                    })
                    if(hash.length > 0){
                        toast.update(id, {
                            render: "Registered as courier",
                            type:"success",
                            isLoading: false,
                            autoClose: 1000,
                            closeButton: true,
                        })
                    }

                }catch(error){
                    console.log(error);
                    toast.update(id,{
                        render: `${error.message}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 2000,
                        closeButton: true,
                    })

                }
            }
            else if(role == 3){
                const id = toast.loading("Registering as user...")
                try{
                    const {request} = await prepareWriteContract({
                        address: contractAddress,
                        abi: abi,
                        functionName: 'receiverRegistration',
                        args: [metadataUri]
                    })
                    const {hash} = await writeContract(request);
                    await waitForTransaction({
                        hash,
                    })
                    if(hash.length > 0){
                        toast.update(id, {
                            render: "Registered as user",
                            type:"success",
                            isLoading: false,
                            autoClose: 1000,
                            closeButton: true,
                        })
                    }

                }catch(error){
                    console.log(error);
                    toast.update(id,{
                        render: `${error.message}`,
                        type: "error",
                        isLoading: false,
                        autoClose: 2000,
                        closeButton: true,
                    })

                }
                
            }
            else null

        }


      }


  return (
    <main className='px-[150px]'>
        <div className='mt-[30px]'>
            <p className='text-center text-[50px] font-medium'>Sign up</p>
        </div>
        <div className=' mt-[50px] flex justify-between'>
            <p className={`text-[20px] px-[10px] cursor-pointer ${role==1?`border-b-[5px] border-b-zinc-600`:null}`} onClick={()=>setRole(1)}>As a Donor</p>
            <p className={`text-[20px] px-[10px] cursor-pointer ${role==2?`border-b-[5px] border-b-zinc-600`:null}`} onClick={()=>setRole(2)}>As a Courier</p>
            <p className={`text-[20px] px-[10px] cursor-pointer ${role==3?`border-b-[5px] border-b-zinc-600`:null}`} onClick={()=>setRole(3)}>As a User</p>
        </div>
        <div className='flex items-center justify-center py-[50px]'>
            <div className='w-[70%] h-[700px] border-[1px] border-zinc-700 rounded-lg py-[30px] px-[30px]'>
                <p className='text-center text-[20px] italic font-semibold'>{role==1?'Registering as Donor':role==2?'Registering as Courier': 'Registering as User'}</p>
                <div>
                    <div className='flex justify-between my-[30px]'>
                        <div className='flex flex-col w-[45%]'>
                            <label>First Name</label>
                            <input onChange={(e)=>setFirstName(e.target.value)} type='text' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Last Name</label>
                            <input onChange={(e)=>setLastName(e.target.value)} type='text' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                    </div>
                    <div className='flex justify-between my-[30px]'>
                        <div className='flex flex-col w-[45%]'>
                            <label>Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type='email' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Phone</label>
                            <input onChange={(e)=>setPhone(e.target.value)} type='tel' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                    </div>
                    {image == undefined?
                    <div>
                        <div className='w-[420px] h-[304px] flex flex-col gap-[8px] mt-[20px]'>
                            <p className='h-[24px] text-[16px] leading-[24px] flex items-center'>Profile picture</p>
                            <div className='w-[300px] h-[200px] rounded-[16px] border-[1px] border-[#000000] bg-neutral-500 flex items-center justify-center'>
                            <label className="w-[134px] h-[44px] text-black bg-[#f4f7ff] cursor-pointer flex items-center justify-center">
                                <input onChange={(e)=>onChangeImage(e)} style={{display:'none'}} type="file" accept='image/*' required/>
                                <span>Upload Image</span>
                            </label>
                            </div>
                        </div>
                    </div>:
                    <div className='mt-[10px] mb-[25px]'>
                        <img src={image} className='w-[200px] h-[200px] rounded-lg' alt='image'/>
                    </div>}

                    <div>
                        <button onClick={Register} className=' w-full bg-zinc-700 py-[8px] rounded-md text-[16px] font-semibold'>{role==1?'Register as Donor':role==2?'Register as Courier': 'Register as User'}</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default registration