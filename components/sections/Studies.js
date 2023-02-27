import Card1 from "../ui/Card1";
import img19 from "../../public/images/img19.jpg"
const Studies = () => {
    return ( 
        <div className="px-32 pb-20 pt-10">
            <h2 className="text-2xl py-10 text-white">Studies and courses open to all</h2>
            <div className="grid grid-cols-3">
                <Card1 image={img19} title="Lifewide Learning" paragraph={"Select a solution that suits you, ranging from individual courses to programmes that are open for all."} />
                <Card1 image={img19} title="Lifewide Learning" paragraph={"Select a solution that suits you, ranging from individual courses to programmes that are open for all."} />
                <Card1 image={img19} title="Lifewide Learning" paragraph={"Select a solution that suits you, ranging from individual courses to programmes that are open for all."} />
            </div>
        </div>
     );
}
 
export default Studies;