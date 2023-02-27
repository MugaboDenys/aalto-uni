import Image from "next/image";
import Link1 from "./Link1";
import {BsArrowRight} from "react-icons/bs"


const BigCard = ({image,title, paragraph, link, className }) => {
    return ( 
        <div className={`flex ${className} items-center gap-10 text-white`}>
            <div className="w-1/2">
                <Image alt="" src={image} />
            </div>
            <div className=" w-1/2 px-5 pt-5">
                <h2 className="  text-3xl ">{title}</h2>
                <p className="text-lg pt-3 pb-5">{paragraph}</p>
                <span className="flex gap-3 items-center group">
                    <BsArrowRight className="text-xl group-hover:scale-x-75  "/>
                    <Link1 title={link} />
                </span>
                

            </div>
        </div>
     );
}
 
export default BigCard;
