import React, { useState } from 'react'
import Image from 'next/image'


export default function Item ({ item }) {
  console.log("query:", item)
  const [step, setStep] = useState(1)
  return (
    <main className='px-[150px] py-[100px]'>
      {
        (step == 1)?<div></div>:<div></div>
      }
      <div className='mb-[20px]'>
        <Image src={"/backwhite-bgrem.png"} width={50} height={50} alt='back arrow'/>
      </div>
      <div className=' w-[100%] flex'>
        <div className='w-[400px] h-[450px] border-zinc-600 border-[1px] rounded-lg'>
          <Image src={"/box-bgrem.png"} height={450} width={400} alt='item'/>
        </div>
        <div className='pl-[50px] flex flex-col gap-[50px]'>
          <p className='text-[25px] font-semibold'>Win The Prize</p>
          <div className='flex gap-[20px] mt-[-20px]'>
            <div>
              <Image src={"/user-bgrem.png"} height={50} width={50} style={{borderRadius:"50%"}} alt='donor'/>
            </div>
            <div>
              <p>Donor</p>
              <p className='text-[16px] font-bold'>Ekwe Chinwizu</p>
            </div>
          </div>
          <div className='text-[14px] mt-[-20px]'>
            <p>The concept behind this item is to bring joy to whoever wins it and support the community</p>
            <p>Join the raffle by bidding and be part of the excitement. Let's make someone's day brighter!</p>
          </div>
          <div>
            <div className='flex gap-[30px] w-[45%] mt-[30px]'>
              <div>
                <p className='text-[14px] font-light'>Join for</p>
                <p className='text-[18px] font-semibold'>10 CMT</p>
              </div>
              <div className=' border-l-[3px] border-l-zinc-600 pl-[20px]'>
                <p className='text-[14px] font-light'>Action ends in</p>
                <p className='text-[18px] font-semibold'>2d 11h 36m 25s</p>
              </div>
            </div>
            <div className='mt-[30px] w-[45%] flex flex-col gap-[20px]'>
              <input className='bg-zinc-600 w-full py-[8px] rounded-md text-center italic' type='text' placeholder='Enter your location'/>
              <button className='bg-zinc-600 w-full py-[8px] rounded-md text-[18px] font-semibold'>Enter to win</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}


export async function getServerSideProps({query}) {
  const { item } = query;

  return {
    props: {
      item,
    }
  };
}