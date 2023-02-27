import Image from "next/image";
import logor from "../../public/images/logor.png"

const Footer = () => {
    return ( 
        <div className="border-t">
            <div>
                <Image alt="" src={logor} />
                <p>Aalto University</p>
                <p> P.O. Box 11000 (Otakaari 1B)</p>
                <p> FI-00076 AALTO</p>
                <p></p>
            </div>
        </div>
     );
}
 
export default Footer;