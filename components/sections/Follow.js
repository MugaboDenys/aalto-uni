import Image from "next/image";
import Link from "next/link";
import triangle from "../../public/images/triangle2.svg"

const Follow = () => {
    return ( 
        <div className="bg-gray1 py-20 relative z-30">
            <div className="h-[25rem] bg-blue1 w-full text-white flex flex-col items-center justify-center relative z-10">
                <h2 className="font-bold md:text-6xl text-2xl hover:pr-24 relative z-30">Follow Us</h2>
                <div className="relative z-30 flex md:block flex-col items-center pt-10 md:pt-0 justify-center">
                {["facebook", "twitter", "instagram", "linkedin"].map((item,index)=>{
                    return(
                        <Link key={index} href="/" className="underline text-3xl hover:text-black hover:bg-white w-fit">{item}, </Link>
                        )
                    })}
                </div>
            </div>
            {/* <Image alt="" src={triangle} width={300} className="absolute bottom-0 z-10" /> */}
        </div>
     );
}
 
export default Follow;