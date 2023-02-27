import Image from "next/image";
import logor from "../../public/images/logor.png"
import logo2 from "../../public/images/logo2.png"
import logo from "../../public/images/logo1.svg"
import Link from "next/link";
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import Button from "../ui/Button";

const Footer = () => {
    return ( 
        <div className="border-t bg-gray1 text-white md:px-32 px-5 py-10 relative z-30">
            <div className=" md:grid space-y-5 md:space-y-0 grid-cols-4 pb-10 ">
                <div>
                    <Link href={'/'} className="inline-flex pb-10">
                        <Image alt="" src={logo2} className="w-32" />
                    </Link>
                    <p>Aalto University</p>
                    <p> P.O. Box 11000 (Otakaari 1B)</p>
                    <p> FI-00076 AALTO</p>
                    <p> Switchboard: +358 9 47001</p>

                    <div className="pt-5">
                        <h2>Follow us:</h2>
                        <div className="flex gap-2">
                            <Link href={'/'} >
                                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            <Link href={'/'} >
                                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            <Link href={'/'} >
                                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            <Link href={'/'} >
                                <FaFacebookF className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            <Link href={'/'} >
                                <FaTwitter className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            <Link href={'/'} >
                                <FaLinkedinIn className="hover:bg-neutral-700 rounded-full p-1 text-2xl" />
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h2 className="text-xl">Quicklinks</h2>
                    <div className="pt-3 space-y-1">
                        {["Research and artistic outputs",
                        "Library – Learning Centre",
                        "Admissions",
                        "Alumni",
                        "Media",
                        "IT services",
                        "Open University",
                        "Aalto University Shop"    
                        ].map(item=>{
                            return(
                                <Link key={item} href="/" className="block text-sm w-fit underline hover:bg-neutral-700" > {item}</Link>
                            )
                        })}
                    </div>
                    <h2 className="text-xl pt-7">Latest</h2>
                    <div className="pt-3 space-y-1">
                        {["News",
                        "Events",
                        "Careers"
                        ].map(item=>{
                            return(
                                <Link key={item} href="/" className="block text-sm w-fit underline hover:bg-neutral-700" > {item}</Link>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl">Contact</h2>
                    <div className="pt-3 space-y-1">
                        {[  "Campus maps",
                            "Contact information"
                        ].map(item=>{
                            return(
                                <Link key={item} href="/" className="block text-sm w-fit underline hover:bg-neutral-700" > {item}</Link>
                            )
                        })}
                    </div>
                    <h2 className="text-xl pt-7">For students</h2>
                    <div className="pt-3 space-y-1">
                        {["Student Guide",
                            "Webmail",
                            "MyCourses",
                            "MyStudies",
                            "Sisu"
                        ].map(item=>{
                            return(
                                <Link key={item} href="/" className="block text-sm w-fit underline hover:bg-neutral-700" > {item}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className="space-y-7 border-t md:border-none pt-5 md:pt-0">
                    <h2 className="text-2xl">Together towards a better world.</h2>
                    <p>Support new ideas, research, work and leadership development towards a stronger Finland.</p>
                    <Button name={"Donate to Aalto University"} link="/" className={"bg-white inline-flex text-black "} />
                </div>
            </div>
            <div className="border-t md:flex pt-5">
                <div className="md:flex gap-5 space-y-3 md:space-y-0">
                    {["Privacy notice", "Cookie policy" ,"Feedback", "Accessibility statement", "Cookie settings" ].map(item=>
                            <Link key={item} href="/" className="block text-sm w-fit underline hover:bg-neutral-700" > {item}</Link>
                        )}
                </div>
                <div className="md:ml-auto mt-10 md:mt-0 md:flex gap-5 space-y-3 md:space-y-0">
                    {["Suomeksi", "Svenska" ,"English"].map((item, index)=>
                        <Link key={item} href="/" className={`block text-sm w-fit underline ${index == 2 && "no-underline"} hover:bg-neutral-700`} > {item}</Link>
                    )}  
                </div>
            </div>
        </div>
     );
}
 
export default Footer;