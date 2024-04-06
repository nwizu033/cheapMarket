import React, { useState } from 'react'
import abi from "../utils/abi.json";
import {prepareWriteContract, writeContract, waitForTransaction} from 'wagmi/actions';
import { useStorageUpload } from "@thirdweb-dev/react";
import { toast } from 'react-toastify';
import { contractAddress } from '@/utils/constants';

function donate() {
    const [title, setTitle] = useState();
    const [location, setLocation] = useState();
    const [itemState, setItemState] = useState();
    const [quantity, setQuantity] = useState();
    const [uploadedPictures,setUploadedPictures] = useState([]);
    const limitedImages = uploadedPictures.slice(-2);
    const mainImage = uploadedPictures.slice(-1);


    

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
            setUploadedPictures((prevCids) => [...prevCids, mainUri]);
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
            title: `${title}`, 
            location: `${location}`, 
            itemState: `${itemState}`,
            quantity: `${quantity}`,
            images: `${uploadedPictures}`,
            mainImage: `${mainImage}`
         }
        const metadata = [obj]; 
        const uri = await upload({ data: metadata });
        console.log("Extracted cid:", uri);
        const ipfsUri = uri.toString();
        const mainUri = ipfsUri.replace('ipfs://', 'https://ipfs.io/ipfs/')
        console.log("metaUri:",mainUri);
        return mainUri
    }

    const donate = async()=> {
        const metadataUri = await uploadMetadata();
        console.log("metaUri during upload:",metadataUri);
        if(metadataUri){
            const id = toast.loading("Donating item...")
                try{
                    const {request} = await prepareWriteContract({
                        address: contractAddress,
                        abi: abi,
                        functionName: 'donateItem',
                        args: [metadataUri]
                    })
                    const {hash} = await writeContract(request);
                    await waitForTransaction({
                        hash,
                    })
                    if(hash.length > 0){
                        toast.update(id, {
                            render: "Donation successful",
                            type:"success",
                            isLoading: false,
                            autoClose: 1000,
                            closeButton: true,
                        })
                        window.location.reload()
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
    }
  return (
    <main className='px-[150px] py-[100px]'>
        <p className='border-b-zinc-600 border-b-[1px] py-[10px] text-[20px] font-semibold'>Donate Item</p>
        <div className='py-[50px]'>
            <div className='flex justify-between'>
                <div className='w-[60%] flex flex-col gap-[40px]'>
                    <div className='flex justify-between w-full'>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Title</p>
                            <input onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='Title' className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Location</p>
                            <input onChange={(e)=>setLocation(e.target.value)} type='text' placeholder="Enter Item's location" className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>State of item</p>
                            <select onChange={(e)=>setItemState(e.target.value)} style={{appearance:"none"}} className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'>
                                <option value="">Choose state of item</option>
                                <option value="New">New</option>
                                <option value="Unused">Unused</option>
                                <option value="Fairly used">Fairly used</option>
                                <option value="Need repairs">Need repairs</option>
                            </select>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Quantity</p>
                            <input onChange={(e)=>setQuantity(e.target.value)} type='number' placeholder='Enter quantity' className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <p>Pictures</p>
                        <div className='w-[48%] h-[200px] rounded-[16px] border-[1px] border-[#000000] bg-zinc-600 flex items-center justify-center'>
                            <label className="w-[134px] h-[44px] text-black bg-[#f4f7ff] cursor-pointer flex items-center justify-center">
                                <input onChange={onChangeImage} style={{display:'none'}} type="file" accept='image/*' required/>
                                <span>Upload Image</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button onClick={donate} className=' w-full bg-zinc-700 py-[8px] rounded-md text-[16px] font-semibold'>Donate </button>
                    </div>

                </div>
                <div className='w-[36%] h-fit flex flex-col gap-[30px]'>
                    <div className='h-fit flex justify-between'>
                    {limitedImages?.map((res,index)=>(
                        <diV key={index}>
                            <img src={res} className='w-[180px] h-[200px] rounded-[16px] border-[1px] border-zinc-600 cursor-pointer'/>
                        </diV>
                    ))}
                    </div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default donate