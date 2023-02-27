import Link from "next/link";
import Layout from "./layout/Layout";
import logo from "../public/images/logor.png"
import Image from "next/image";
import {BiLockAlt} from "react-icons/bi"
import Button from "./ui/Button";

const Navbar = () => {
    return ( 
        <div className="px-20 py-10 bg-gray1 flex items-center">
            <Link href={'/'} >
                <Image alt="" src={logo} className="h-20 w-auto"/>
            </Link>
            <div className="flex ml-auto">
                {["For Personal", "Support Us", "Search", "Menu"].map((item, index)=>{
                    return(
                        <ul key={index} className="" >
                            <li className="flex items-center gap-2">
                               <BiLockAlt className={`text-white text-xl ${index == 2 && "border-l-2 pl-10"}`}/> <Link href={'/'} className={`text-white pr-10  `}>{item}</Link>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <Button name={"Login"} link="/" className={"bg-white"} />
        </div>
     );
}
 
export default Navbar;