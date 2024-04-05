import React, { useState } from 'react'

function registration() {
    const [role, setRole] = useState(1);
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
            <div className='w-[70%] h-[600px] border-[1px] border-zinc-700 rounded-lg py-[30px] px-[30px]'>
                <p className='text-center text-[20px] italic font-semibold'>{role==1?'Registering as Donor':role==2?'Registering as Courier': 'Registering as User'}</p>
                <form>
                    <div className='flex justify-between my-[30px]'>
                        <div className='flex flex-col w-[45%]'>
                            <label>First Name</label>
                            <input type='text' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Last Name</label>
                            <input type='text' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                    </div>
                    <div className='flex justify-between my-[30px]'>
                        <div className='flex flex-col w-[45%]'>
                            <label>Email</label>
                            <input type='email' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label>Phone</label>
                            <input type='tel' className='py-[10px] text-[16px] rounded-md w-full bg-neutral-500'/>
                        </div>
                    </div>
                    <div className='w-[420px] h-[304px] flex flex-col gap-[8px] mt-[20px]'>
                        <p className='h-[24px] text-[16px] leading-[24px] flex items-center'>Profile picture</p>
                        <div className='w-[300px] h-[200px] rounded-[16px] border-[1px] border-[#000000] bg-neutral-500 flex items-center justify-center'>
                        <label className="w-[134px] h-[44px] text-black bg-[#f4f7ff] cursor-pointer flex items-center justify-center">
                            <input style={{display:'none'}} type="file" accept='image/*' required/>
                            <span>Upload Image</span>
                        </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default registration