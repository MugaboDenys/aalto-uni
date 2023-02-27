import Link from "next/link";

const Link1 = (props) => {
    return ( 
        <Link href={'/'} className="block w-fit hover:bg-neutral-700" >
            {props.title}
        </Link>
     );
}
 
export default Link1;