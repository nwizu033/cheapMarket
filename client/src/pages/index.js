import Image from "next/image";
import { useStorageUpload } from "@thirdweb-dev/react";
import { useState } from "react";
// import { upload } from "thirdweb/storage"
import { createThirdwebClient } from "thirdweb";
import Link from "next/link";


export default function Home() {

  return (
    <main className="px-[100px]">
      {/* Navbar (sign in/ signup) */}
      <div className="flex items-center justify-between py-[50px]">
        <div className="text-[30px]">
          <p>CheapMarket</p>
        </div>
        <div className="flex gap-[20px]">
          <Link className=" text-center rounded-xl py-[8px] w-[100px] bg-slate-950" href={"/items"}>Sign Items</Link>
          <Link className=" text-center rounded-xl py-[8px] w-[100px] bg-gray-500" href={"/registration"}>Sign up</Link>  
        </div>
      </div>

      {/* Jumbotron - */}
      <div className="flex justify-between px-[50px] h-[450px">
        <div>
          <Image src={"/box-bgrem.png"} width={200} height={200} alt="box"/>
        </div>
        <div>
          <div className="text-[70px] text-center mt-[30px]">
            <p>Join raffle draws for</p>
            <p className="mt-[-10px]">exclusive items</p>
          </div>
          <div className=" mt-[50px] flex gap-[30px]">
            <div className="w-full flex items-center">
              <input placeholder="Search for an item" className=" px-[30px] bg-gray-500 py-[8px] rounded-xl mr-[-40px] w-full" type="text"/>
              <Image src={"/search-icon.png"} height={20} width={20}/>
            </div>
            <div className="bg-gray-500 w-[100px] py-[8px] text-center rounded-xl">Search</div>
          </div>
        </div>
        <div className="flex items-end mb-[20px]">
          <Image src={"/boxright-bgrem.png"} width={200} height={200} alt="box"/>
        </div>
      </div>

      {/* line one */}
      <div className=" border-b-[0.5px] border-b-gray-500 w-full mt-[150px]"></div>

      {/* How it works */}
      <div className="mt-[30px]">
        <p className="mb-[30px] text-[20px] font-bold">How it works</p>
        <div className=" flex w-full h-fit border-y-[0.5px] border-y-gray-500 text-[14px]">
          <div className="flex flex-col gap-[20px] pt-[20px] pl-[10px]">
            <Image src={"/box-bgrem.png"} width={150} height={150} alt="step 1"/>
            <p className="text-[25px] font-semibold">Step 1</p>
            <p className="w-[300px] mb-[60px]">Submit your item. Provide details and get a reward once delivered</p>
          </div>
          <div className="flex flex-col gap-[20px] pt-[20px] pl-[10px]">
            <Image src={"/bid-bgrem.png"} width={150} height={150} alt="step 2"/>
            <p className="text-[25px] font-semibold">Step 2</p>
            <p className="w-[300px] mb-[60px]">Bid for an item. Enter the raffle for your desired item and win.</p>
          </div>
          <div className="flex flex-col gap-[20px] pt-[5px] pl-[10px]">
            <Image src={"/delivery.png"} width={150} height={150} alt="step 3"/>
            <p className="text-[25px] font-semibold">Step 3</p>
            <p className="w-[300px] mb-[60px]">Courier service. Choose suitable courier service provider for your delivery</p>
          </div>
          <div className="flex flex-col gap-[15px] pt-[20px] pl-[10px]">
            <Image src={"/deliveredyes-bgrem.png"} width={150} height={150} alt="step 4"/>
            <p className="text-[25px] font-semibold">Step 4</p>
            <p className="w-[300px] mb-[60px]">Confirm Item delivery. Both courier and receiver confirm item successful delivery</p>
          </div>
        </div>
      </div>

      {/* Join as courier, partner, receiver */}
      <div>
        <p className="text-[20px] font-bold mt-[30px] mb-[30px]">Join CheapMarket</p>
        <div className=" mb-[30px] border-y-[0.5px] border-y-gray-500">
          <div className="flex justify-between items-center px-[200px] py-[50px]">
            <Image src={"/donate-bgrem.png"} style={{borderRadius:"20px"}} height={300} width={250} alt="courier"/>
            <div className=" flex flex-col gap-[20px]">
              <p className="text-[25px] font-semibold">As a Donor</p>
              <p className="w-[300px] text-[16px]">Earn tokens by donating your items. All you need is to upload them to the system and be reliable</p>
              <button className="w-[150px] py-[8px] rounded-xl bg-gray-500">Donate with us</button>
            </div>
          </div>
          <div className="flex justify-between items-center px-[200px] py-[50px]">
            <Image src={"/courierbgrem.png"} style={{borderRadius:"20px"}} height={300} width={250} alt="courier"/>
            <div className=" flex flex-col gap-[20px]">
              <p className="text-[25px] font-semibold">As a Courier</p>
              <p className="w-[300px] text-[16px]">Earn tokens by delivering items. All you need is a reliable mode of transport</p>
              <button className="w-[150px] py-[8px] rounded-xl bg-gray-500">Deliver with us</button>
            </div>
          </div>
          <div className="flex justify-between items-center px-[200px] py-[50px]">
            <Image src={"/user-bgrem.png"} style={{borderRadius:"20px"}} height={300} width={200} alt="courier"/>
            <div className=" flex flex-col gap-[20px]">
              <p className="text-[25px] font-semibold">As a User</p>
              <p className="w-[300px] text-[16px]">Join and get those items you desire for affordable prices</p>
              <button className="w-[150px] py-[8px] rounded-xl bg-gray-500">Shop with us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore our platform */}
      <div>
        <p className="text-[20px] font-bold mt-[30px] mb-[30px]">Explore our platform</p>
        <div className="flex border-y-[0.5px] border-y-gray-500 py-[50px] px-[50px]">
          <div className="w-[70%] flex justify-between">
          <div className="flex flex-col gap-[25px]">
            <p className="text-[20px] font-bold">Enter to win!</p>
            <p className="w-[400px] text-[16px]">Win unique items with CheapMarket. Discover a range of exclusive products delivered with ease.</p>
            <Link href={"/items"}><button className="w-[150px] py-[8px] rounded-xl bg-gray-500">Explore</button></Link>
          </div>
          <Image  src={"/boxgift-bgrem.png"} width={200} height={200} alt="box"/>
        </div>
        </div>
      </div>
    </main>
  );
}
