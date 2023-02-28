import Image from "next/image";
import Link1 from "./Link1";
import {BsArrowRight} from "react-icons/bs"
import Link from "next/link";


const BigCard = ({image,title, paragraph, link=[], className }) => {
    return ( 
        <div className={`md:flex ${className} items-center gap-10 text-white`}>
            <div className="md:w-1/2">
                <Image alt="" src={image} />
            </div>
            <div className=" md:w-1/2 md:px-5 pt-5">
                <h2 className=" md:text-3xl text-xl ">{title}</h2>
                <p className="md:text-lg pt-3 pb-5">{paragraph}</p>
                {link.map(item=>
                <span  key={item} className="flex gap-3 items-center group">
                    <BsArrowRight className="text-xl group-hover:scale-x-75  "/>
                        <Link href={'/'} >{item} </Link>
                </span>
                )}
                

            </div>
        </div>
     );
}
 
export default BigCard;
