import Link from "next/link";
import Layout from "./Layout";
import logo from "../../public/images/logor.png"
import Image from "next/image";
import {BiLockAlt, } from "react-icons/bi"
import {BsGlobe2, BsHeart, BsSearch} from "react-icons/bs"
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import {IoCloseOutline} from "react-icons/io5"
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

    const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);

    const dynamic = useRouter().asPath;
    useEffect(() => setMenuIsOpen(false), [dynamic]);

    useEffect(() => {
        document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [menuIsOpen]);

    return ( 
        <div className={`md:px-20 px-5 ${animateNav ? "md:py-1" : "md:py-5"} ease-in duration-500  py-2 border-b-2 bg-gray1 flex items-center md:fixed w-full z-40`}>
            <Link href={'/'} > 
                <Image alt="" src={logo} className={` ${animateNav ? "md:h-7 h-7" : "md:h-20 h-7"} ease-in duration-300 w-auto`}/>
            </Link>
            <ul className="md:flex hidden ml-auto">
                <li className="flex items-center gap-2">
                    <BiLockAlt className={`text-white text-xl `}/> <Link href={'/'}  className={`text-white pr-10 `}>Fore Personnel</Link>
                </li>
                <li className="flex items-center gap-2">
                    <BiLockAlt className={`text-white text-xl `}/> <Link href={'/'} className={`text-white pr-10 `}>Support Us</Link>
                </li>
                <li className="flex items-center gap-2">
                    <BiLockAlt className={`text-white text-xl `}/> <Link href={'/'}  className={`text-white pr-10 `}>EN</Link>
                </li>
                <li className="flex items-center gap-2">
                    <BiLockAlt className={`text-white text-xl `}/> <Link href={'/'}  className={`text-white pr-10 `}>Search</Link>
                </li>
                <li className="flex items-center gap-2">
                    <BiLockAlt className={`text-white text-xl `}/> <Link href={'/'} onClick={ handleOpenMenu} className={`text-white pr-10 `}>{handleOpenMenu ? "Menu" : "Close"}</Link>
                </li>
            </ul>
            <div className="flex ml-auto md:hidden items-center gap-3 text-white">
                <BsSearch className="" />
                <Link href={'/'} className="pl-3 border-l text-sm">Menu</Link>
            </div>
            <Button name={"Login"} link="/" className={"hidden md:block bg-white"} />
            {menuIsOpen ? (
                <section className="fixed left-32 top-52 z-50 grid h-screen mx-auto bg-gray1 max-w-7xl">
                    <div className="overflow-y-scroll">
                        <div
                        className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
                        >
                        
                        </div>
                        <div className="">
                        <div className="flex flex-col justify-between md:space-y-10 space-y-7 cursor-pointer md:pt-52 pt-32 md:px-36 px-10">
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
                                <div className="flex justify-between max-w-sm">
                                    <p className="md:text-[24px] text-xl whitespace-nowrap font-semibold">
                                    {" "}
                                    {e}
                                    </p>
                                    <Image alt="" src={plus} />
                                </div>
                                </Link>
                            );
                            })}
                        </div>
                        </div>
                    </div>
                </section>
      ) : null}
        </div>
        
     );
}
 
export default Navbar;