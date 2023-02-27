import Image from "next/image";
import Link from "next/link";

const Card2 = ({title, paragraph, image}) => {
    return ( 
        <Link href={'/'} className=" flex justify-between md:max-h-[9rem] overflow-clip group border border-white  text-white">
            <div className=" px-5 md:pb-5 md:pt-16 pt-10">
                <h2 className="group-hover:bg-neutral-500 duration-300 w-fit md:text-lg  font-semibold">{title}</h2>
                <p className="md:block hidden">{paragraph}</p>
                
            </div>
            <div className="md:min-w-[9rem] min-w-[5rem] md:min-h-[9rem] min-h-[5rem]">
                <Image alt="" src={image} className="group-hover:opacity-70 duration-300 w-full " />
            </div>
            
        </Link>
     );
}
 
export default Card2;