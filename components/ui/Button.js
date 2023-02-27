import Link from "next/link";

const Button = ({link, className, name}) => {
    return ( 
        <Link href={link} className={`${className} block rounded-full px-8 py-3 duration-200 hover:bg-blue1 hover:text-white`} >
            {name}
        </Link>
     );
}
 
export default Button;