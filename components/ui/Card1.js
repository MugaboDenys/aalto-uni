import Image from "next/image";
import Link from "next/link";

const Card1 = ({image,title, paragraph, date, cat, className, styles}) => {
    return ( 
        <Link href={'/'} className={`block group  ${className} text-white bg-gray1 pb-5`}>
            <div>
            <Image alt="" src={image} className={`group-hover:opacity-70 duration-300 object-cover ${styles}`} />
            </div>
            <div className="space-y-7 px-5 pt-5">
                <h2 className="group-hover:bg-neutral-700 duration-300 w-fit text-lg font-semibold">{title}</h2>
                <p className="pb-5">{paragraph}</p>
                {date || cat && <h5 className="text-xs">{date} | {cat}</h5>}
            </div>
        </Link>
     );
}
 
export default Card1;