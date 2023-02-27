import Layout from "../layout/Layout";
import Card1 from "../ui/Card1";
import img11 from "../../public/images/img11.jpg"
import img12 from "../../public/images/img12.jpg"
import img13 from "../../public/images/img13.jpg"
import Card2 from "../ui/Card2";
import BigCard from "../ui/BigCard";
import Button from "../ui/Button";

const Spotlight = ({mainTitle,btnName, className, styles}) => {
    return ( 
        
        <div className={`${className} px-28 py-28 text-white`}>
            <div className="relative">
                <h2 className="text-3xl">{mainTitle}</h2>
                <h3 className="text-lg pt-3">ind more current news and interesting events on the <span className="underline hover:bg-neutral-700 text-white">News and events page.</span></h3>
                <Button name={btnName} link="/" className={"absolute text-sm hover:border-transparent right-0 bottom-10 border"} />
            </div>
            <div className="flex gap-5 pt-5">
                 <Card1 
                    image={img11}
                    title="Shrinking From the heat"
                    paragraph={"Reactive fabrics respond to changes in temperature"}
                    date={"21.2.2023"}
                    cat={"News"}
                    className= {styles}
                /> 
                <Card1 
                    image={img11}
                    title="Shrinking From the heat"
                    paragraph={"Reactive fabrics respond to changes in temperature"}
                    date={"21.2.2023"}
                    cat={"News"}
                    className= {styles}
                /> 
                <Card1 
                    image={img11}
                    title="Shrinking From the heat"
                    paragraph={"Reactive fabrics respond to changes in temperature"}
                    date={"21.2.2023"}
                    cat={"News"}
                    className= {styles}
                /> 
            </div>

        </div>
        
     );
}
 
export default Spotlight;

                
                