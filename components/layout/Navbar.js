import Link from "next/link";
import Layout from "./Layout";
import logo from "../../public/images/logor.png"
import Image from "next/image";
import {BiGlobe, BiLockAlt, BiMenu, BiPlus, } from "react-icons/bi"
import {BsGlobe2, BsHeart, BsSearch, BsListUl} from "react-icons/bs"
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import {IoCloseOutline} from "react-icons/io5"
import {AiOutlineAppstore} from "react-icons/ai"
import {FaGraduationCap, FaEdit} from "react-icons/fa"
import { useRouter } from "next/router";
import arrow from "../../public/images/arrow-right.svg";
import plus from "../../public/images/plus.svg";


const Navbar = () => {
    const [animateNav, setAnimateNav] = useState(false);
    
    useEffect (()=>{
        const listen = ()=>{
            window.scrollY > 50 ? setAnimateNav(true) : setAnimateNav(false)
        }
        window.addEventListener('scroll', listen);
        return (window.addEventListener('scroll', listen))
    }, []);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
    const handleNav = () => setNavbar(!navbar);

    const dynamic = useRouter().asPath;
    useEffect(() => setMenuIsOpen(false), [dynamic]);

    useEffect(() => {
        document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [menuIsOpen]);

    return ( 
        <div className={`md:px-20 px-5 ${animateNav ? "md:py-1" : "md:py-5"} ease-in duration-500   border-b-2 bg-gray1 flex items-center md:fixed w-full z-40`}>
            <Link href={'/'} > 
                <Image alt="" src={logo} className={` ${animateNav ? "md:h-7 h-7" : "md:h-20 h-7"} ease-in duration-300 w-auto`}/>
            </Link>
            <ul className="md:flex gap-8 mr-8 hidden ml-auto">
                <li className="flex items-center gap-2 hover:bg-neutral-700">
                     <Link href={'/'}  className={`text-white flex items-center gap-2`}><BiLockAlt className={`text-white text-xl `}/>Fore Personnel</Link>
                </li>
                <li className="flex items-center gap-2 hover:bg-neutral-700">
                    <Link href={'/'} className={`text-white flex items-center gap-2`}><BsHeart className={`text-white text-sm `}/> Support Us</Link>
                </li>
                <li className="flex items-center gap-2 hover:bg-neutral-700">
                     <Link href={'/'}  className={`text-white flex items-center gap-2`}><BsGlobe2 className={`text-white text-sm `}/>EN</Link>
                </li>
                <li className="flex items-center gap-2 hover:bg-neutral-700">
                     <Link href={'/'}  className={`text-white flex items-center gap-2`} onClick={handleNav} ><BsSearch className={`text-white text-sm `}/>Search</Link>
                </li>
                <li className=" hover:bg-neutral-700">
                     <Link href={'/'} onClick={ handleOpenMenu} className={`text-white flex items-center gap-2`}>{menuIsOpen ?<IoCloseOutline className={`text-white text-xl `}/> : <BiMenu className={`text-white text-xl `}/>}{menuIsOpen ?  "Close menu": "Menu"}</Link>
                </li>
            </ul>
            <div className="flex ml-auto md:hidden items-center gap-3 h-full py-3 text-white">
                <BsSearch className="cursor-pointer" onClick={handleNav} />
                <Link href={'/'} className="pl-3 border-l text-sm hover:bg-neutral-700" onClick={handleOpenMenu}>{menuIsOpen ?  "Close menu": "Menu"}</Link>
            </div>
            <Button name={"Login"} link="/" className={"hidden md:block bg-white"} />
            {navbar && 
                <div className={` absolute w-full md:top-0 top-12 left-0 z-10 slide-top pb-5`}>
                <ul className="h-screen bg-white/50 ">
                    <div className="bg-blue1 md:h-72 h-full px-5  flex justify-center relative ">
                    <div className="flex w-[80rem] md:right-20 right-5 items-center justify-between absolute md:top-16 top-12">
                        <h2 className="text-xl text-white">Search</h2>
                        <span className=" cursor-pointer p-2 border-transparent border hover:border-white right-20 rounded-full hover:border" onClick={handleNav} ><IoCloseOutline  className="text-3xl text-white"/></span>
                    </div>
                    <div className="relative top-32 w-[70rem]">
                        <div className="rounded-full border-2 overflow-clip">
                        <form action="#" className="flex justify-between items-center  ">
                            <input type="text" className="w-full px-4 text-white outline-none bg-transparent" />
                            <span className="ml-auto py-4 px-4 border-l-2 hover:bg-neutral-700"> <BsSearch className="text-white  text-xl" /></span>
                        </form>
                        </div>
                    </div>
                    </div>
                </ul>
          </div>
            }
            {menuIsOpen && (
                <section className="fixed text-white w-full right-0 left-0 md:top-28 top-12 z-30 h-screen mx-auto bg-white/50 ">
                    <div className="overflow-y-scroll">
                        
                        <div className="bg-gray1 pb-32 md:ml-44 h-full">
                            <div className="hidden md:flex gap-5 md:px-20 px-5 ">
                                {[{icn: <AiOutlineAppstore/>, text : "Service"},{icn: <BsListUl/>, text : "Site Index"},{icn: <FaGraduationCap/>, text : "Student Guide"},{icn: <FaEdit/>, text : "Apply to Aalto"}].map(item =>
                                        <Link key={item} href="/" className="flex flex-col items-center hover:bg-neutral-700 px-4 max-w-[8rem]">
                                            <span className="text-5xl">{item.icn}</span>
                                            <span className="text-center">{item.text}</span>
                                        </Link>
                                    )}
                            </div>
                        <div className="flex flex-col justify-between cursor-pointer md:px-20 px-10">
                            {[
                            "Admissions and applying",
                            "News and Events",
                            "Research & Art",
                            "For Students",
                            "Schools and departments",
                            "Tools",
                            "About us",
                            ].map((e, i) => {
                            return (
                                <Link key={i} href={e}>
                                <div className="flex justify-between h-20 items-center hover:bg-neutral-700 md:px-5 px-2 border-b">
                                    <p className="md:text-[24px] text-xl whitespace-nowrap font-bold">
                                    {" "}
                                    {e}
                                    </p>
                                    <BiPlus className="text-2xl"/>
                                </div>
                                </Link>
                            );
                            })}
                        </div>
                        </div>
                    </div>
                </section>
                ) } 
        </div>
        
     );
}
 
export default Navbar;