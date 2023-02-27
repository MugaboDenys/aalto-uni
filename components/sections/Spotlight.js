import Layout from "../layout/Layout";
import Card1 from "../ui/Card1";
import Card2 from "../ui/Card2";
import BigCard from "../ui/BigCard";
import Button from "../ui/Button";

const Spotlight = ({mainTitle,btnName, className, styles, img1, img2, img3}) => {
    return ( 
        
        <div className={`${className} md:px-28 px-5 md:py-28 pt-10 pb-28 relative text-white`}>
            <div className="md:relative ">
                <h2 className="text-3xl">{mainTitle}</h2>
                <h3 className="text-lg pt-3">ind more current news and interesting events on the <span className="underline hover:bg-neutral-700 text-white">News and events page.</span></h3>
                <Button name={btnName} link="/" className={"absolute text-sm hover:border-transparent md:right-0 md:bottom-10 bottom-14 border"} />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-5">
                 <Card1 
                    image={img1}
                    title="Shrinking From the heat"
                    paragraph={"Reactive fabrics respond to changes in temperature"}
                    date={"21.2.2023"}
                    cat={"News"}
                    className= {styles}
                /> 
                <Card1 
                    image={img2}
                    title="Shrinking From the heat"
                    paragraph={"Reactive fabrics respond to changes in temperature"}
                    date={"21.2.2023"}
                    cat={"News"}
                    className= {styles}
                /> 
                <Card1 
                    image={img3}
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

                
                