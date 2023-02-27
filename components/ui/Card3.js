import Image from "next/image";
import Link from "next/link";

const Card3 = ({image, link}) => {
    return ( 
        <div className=" text-white">
            <Link href={'/'} className="">
                <Image alt="" src={image} className="hover:opacity-70" />
            </Link>
            <h4 className="text-sm ">{link}</h4>
        </div>
     );
}
 
export default Card3;