import React from 'react'

function donate() {
  return (
    <main className='px-[150px] py-[100px]'>
        <p className='border-b-zinc-600 border-b-[1px] py-[10px] text-[20px] font-semibold'>Donate Item</p>
        <div className='py-[50px]'>
            <form className='flex justify-between'>
                <div className='w-[60%] flex flex-col gap-[40px]'>
                    <div className='flex justify-between w-full'>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Title</p>
                            <input type='text' placeholder='Title' className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Location</p>
                            <input type='text' placeholder="Enter Item's location" className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>State of item</p>
                            <select style={{appearance:"none"}} className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'>
                                <option>Choose state of item</option>
                                <option>New</option>
                                <option>Unused</option>
                                <option>Fairly used</option>
                                <option>Need repairs</option>
                            </select>
                        </div>
                        <div className='w-[49%] flex flex-col gap-[10px]'>
                            <p>Quantity</p>
                            <input type='number' placeholder='Enter quantity' className='w-full py-[8px] rounded-xl bg-zinc-600 px-[20px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <p>Pictures</p>
                        <div className='w-[48%] h-[200px] rounded-[16px] border-[1px] border-[#000000] bg-zinc-600 flex items-center justify-center'>
                            <label className="w-[134px] h-[44px] text-black bg-[#f4f7ff] cursor-pointer flex items-center justify-center">
                                <input style={{display:'none'}} type="file" accept='image/*' required/>
                                <span>Upload Image</span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className='w-[36%] border-[1px] border-zinc-600 h-[100px]'></div>
            </form>
        </div>
    </main>
  )
}

export default donate