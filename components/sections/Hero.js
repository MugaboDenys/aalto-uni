import Image from "next/image";
import Layout from "../layout/Layout";
import img1 from "../../public/images/img1.png"
import img2 from "../../public/images/img2.png"
import img4 from "../../public/images/img4.png"
import img3 from "../../public/images/img3.jpg"
import Link from "next/link";
import {BsArrowRight, BsFillCircleFill} from "react-icons/bs"
import {HiOutlineChevronLeft, HiOutlineChevronRight} from "react-icons/hi"
import Swiper from "swiper";
import { useState } from "react";



const Hero = () => {
    const data = [
        {   image : img1, 
            heading : "How tech is transforming diagnostics and care", 
            desc : "Read three inspiring stories of how Aaltonians are bringing new hope to people who suffer from",
            links : ["Alzheimer's disease ", "ADHD ", "Alcoholism "]
        },
        {   image : img3, 
            heading : "Interested in doctoral studies?", 
            desc : "Doctoral studies pave the way for self-development and research geared toward solving demanding problems. Apply to our programmes! ",
            links : ["How to apply?", "Doctoral programmes "]
        },
        {   image : img4, 
            heading : "Aalto student – New Student Guide is here to replace Into", 
            desc : "The into.aalto.fi contents have been migrated to the Aalto.fi site with information and news for students.",
            links : ["Student Guide", "Read the news "]
        },
        {   image : img2, 
            heading : "Join us in supporting Ukraine’s university students", 
            desc : "Donations help them continue their studies during the crisis",
            links : ["Read more"]
        }
    ]

    let [activeObjIndex, setActiveObjIndex] = useState(0)

    return ( 
        
        <div className="relative">
            
            <div className="bg-black text-white  md:absolute md:left-28 md:-bottom-20 md:w-[40rem] z-20 py-7 md:px-10 px-5">
                <h3 className="text-3xl">{data[activeObjIndex].heading}</h3>
                <p>{data[activeObjIndex].desc}</p>
                {data[activeObjIndex].links.map(link=>
                    <Link key={link} href={'/'} className="flex w-fit underline items-center gap-2 hover:bg-white hover:text-black duration-200" > <BsArrowRight/>{link}</Link>
                )}
                
                <div className="w-ful h-12 py-7">
                    <HiOutlineChevronLeft className="absolute cursor-pointer rounded-full border p-1 text-3xl border-white hover:-translate-y-[0.12rem] left-10" onClick={()=>{
                        if(activeObjIndex <= 0){
                            setActiveObjIndex(data.length-1)
                        } else{
                            
                            setActiveObjIndex(activeObjIndex -1)  
                        }
                    }}/>
                    <HiOutlineChevronRight className="absolute cursor-pointer rounded-full border p-1 text-3xl border-white hover:-translate-y-[0.12rem] right-10" onClick={()=>{
                        if(activeObjIndex >= data.length -1){
                            setActiveObjIndex(0)    
                        }else{
                            setActiveObjIndex(activeObjIndex +1)
                        } 
                    }}/>
                    <div className="flex text-[0.50rem] items-center justify-center py-2  gap-2">
                        <BsFillCircleFill className=" text-sm" />
                        <BsFillCircleFill className=" hover:text-xs" />
                        <BsFillCircleFill className=" hover:text-xs" />
                        <BsFillCircleFill className=" hover:text-xs" />
                    </div>
                </div>  
            </div>
            <div className="md:h-[40rem] overflow-clip">
                <Image alt="" src={data[activeObjIndex].image} className="w-full h-52 md:h-full" />
            </div>
        </div>
        
     );
}
 
export default Hero;