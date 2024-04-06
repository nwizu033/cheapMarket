import {useState, useEffect} from 'react'
import { useAccount } from 'wagmi'
import {readContract} from 'wagmi/actions'
import { contractAddress } from '@/utils/constants'
import abi from "../utils/abi.json"
import ExtractItemUri from '@/Components/ExtractItemUri'
import Link from 'next/link'

function items() {
    const {address, isConnecting,isDisconnected} = useAccount();
    const [items, setItems] = useState();

    console.log("items:",items);

    const getItems = async() => {
        try{
            const itemss = await readContract({
                address: contractAddress,
                abi: abi,
                functionName: 'getAllItems',
            })
            setItems(itemss);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getItems()
    }, [address])

  return (
    <main className='px-[150px] py-[50px]'>
        <div>
             <div>
                <p className=' flex justify-center py-10 text-3xl font-semibold'>Listed Items</p>
             </div>
             <div className="grid grid-cols-3 gap-10">                     
                {
                items?.map((res,index) =>(
                    <Link 
                    className=" "
                    key={index}
                    href={`/item/${index+1}`}
                    >
                        <ExtractItemUri  metaUri={res.itemDetails}/>
                        {/* <p>{ethers.formatUnits(res.price)} USDC</p> */}
                        
                    </Link>
                    
                ))

                
                }
            </div>
        </div>
    </main>
  )
}

export default items