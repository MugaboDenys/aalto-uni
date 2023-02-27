import Image from "next/image";
import Layout from "../layout/Layout";
import img1 from "../../public/images/img1.png"
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs"


const Hero = () => {
    return ( 
        
        <div className="relative">
            <div className="h-[30rem] overflow-clip">
                <Image alt="" src={img1} className="w-full" />
            </div>
            <div className="bg-black text-white absolute left-28 -bottom-10 w-[40rem] py-7 px-10">
                <h3 className="text-3xl">How tech is transforming diagnostics and care</h3>
                <p>Read three inspiring stories of how Aaltonians are bringing new hope to people who suffer from</p>
                <Link href={'/'} className="flex w-fit items-center gap-2 hover:bg-white hover:text-black duration-200" > <BsArrowRight/> How it works</Link>
                <Link href={'/'} className="flex w-fit items-center gap-2 hover:bg-white hover:text-black duration-200" > <BsArrowRight/> How it works</Link>
            </div>
        </div>
        
     );
}
 
export default Hero;