import Image from "next/image";
import Link from "next/link";

const Card2 = ({title, paragraph, image}) => {
    return ( 
        <Link href={'/'} className=" flex justify-between max-h-[9rem] overflow-clip group border border-white  text-white">
            <div className=" px-5 pb-5 pt-16">
                <h2 className="group-hover:bg-neutral-500 duration-300 w-fit text-lg font-semibold">{title}</h2>
                <p className="">{paragraph}</p>
                
            </div>
            <div className="min-w-[9rem] min-h-[9rem]">
                <Image alt="" src={image} className="group-hover:opacity-70 duration-300 w-full " />
            </div>
            
        </Link>
     );
}
 
export default Card2;