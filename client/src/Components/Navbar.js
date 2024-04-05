import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { ConnectWallet } from "@thirdweb-dev/react"
const Navbar = () => {
    const  router = useRouter();
    const routesWithHiddenNavbar = [`/`];
    const shouldHideNavbar = router.pathname === "/";
    if(shouldHideNavbar) {
        return null;
    }
    return(
        <div className=" bg-zinc-800 w-[1442px] px-[100px] py-[20px] h-[88px] flex justify-between items-center">
            <div>
                <Link href={"/"} className="text-[30px] font-bold">CheapMarket</Link>
            </div>
            <div className="w-[35%] flex items-center">
                <input placeholder="Search for an item" className=" shadow-sm shadow-white px-[30px] bg-gray-500 py-[5px] rounded-xl mr-[-40px] w-full" type="text"/>
                <Image src={"/search-icon.png"} height={20} width={20}/>
            </div>
            <div className="flex items-center gap-[30px] text-[20px] font-medium">
                <Link href={"/donate"}>Donate</Link>
                <Link href={"/item/item"}>Bid Items</Link>
                <Link href={"/"}>Courier</Link>
                <ConnectWallet/>
            </div>
        </div>
    )
}
export default Navbar