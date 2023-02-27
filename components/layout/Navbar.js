import Link from "next/link";
import Layout from "./Layout";
import logo from "../../public/images/logor.png"
import Image from "next/image";
import {BiLockAlt, } from "react-icons/bi"
import {BsGlobe2, BsHeart, BsSearch} from "react-icons/bs"
import Button from "../ui/Button";

const Navbar = () => {
    return ( 
        <div className="md:px-20 px-5 md:py-5 py-2 border-b-2 bg-gray1 flex items-center fixed w-full z-40">
            <Link href={'/'} >
                <Image alt="" src={logo} className="md:h-20 h-7 w-auto"/>
            </Link>
            <div className="md:flex hidden ml-auto">
                {["For Personal", "Support Us","EN", "Search", "Menu"].map((item, index)=>{
                    return(
                        <ul key={index} className="" >
                            <li className="flex items-center gap-2">
                               <BiLockAlt className={`text-white text-xl ${index == 2 && "border-l-2 pl-10"}`}/> <Link href={'/'} className={`text-white pr-10  `}>{item}</Link>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="flex ml-auto md:hidden items-center gap-3 text-white">
                <BsSearch className="" />
                <Link href={'/'} className="pl-3 border-l text-sm">Menu</Link>
            </div>
            <Button name={"Login"} link="/" className={"hidden md:block bg-white"} />
        </div>
     );
}
 
export default Navbar;