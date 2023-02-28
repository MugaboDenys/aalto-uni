import Image from "next/image";
import Link from "next/link";
import triangle from "../../public/images/triangle2.svg"
import circle from "../../public/images/circle.svg"
import ellipse from "../../public/images/Ellipse.svg"

const Follow = () => {
    return ( 
        <div className="bg-gray1 py-20 ">
            <div className="h-[25rem] bg-blue1 w-full text-white flex flex-col items-center relative overflow-clip justify-center">
                <h2 className="font-bold md:text-6xl text-2xl hover:pr-24 relative z-20 ">Follow Us</h2>
                <div className="flex md:block flex-col items-center pt-10 md:pt-0 justify-center relative z-20">
                {["facebook,", "twitter,", "instagram&", "linkedin"].map((item,index)=>{
                    return(
                        <Link key={index} href="/" className="underline text-3xl hover:text-black hover:bg-white w-fit">{item}</Link>
                        )
                    })}
                </div>
                <Image alt="" src={triangle} width={300} className="absolute md:-bottom-16 md:-rotate-12 -bottom-44 -left-32 md:left-12 z-10" />
                <Image alt="" src={circle} width={700} className="absolute md:-top-64 md:left-80 -left-10 z-10" />
                <Image alt="" src={ellipse} width={500} className="absolute md:-top-12 md:right-12 -top-56 -right-10 -rotate-90 z-10" />
            </div>
        </div>
     );
}
 
export default Follow;