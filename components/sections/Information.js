import Card2 from "../ui/Card2";
import img20 from "../../public/images/img20.png"

const Information = () => {
    return ( 
        <div className="px-32 py-20 bg-gray1 text-white">
            <h2 className="text-3xl pb-10">Information</h2>
            <div className="grid grid-cols-2 gap-7">
                <Card2 image={img20} title="Ukraine War" paragraph="On this page, we will gather information on how Russia's invasion of Ukraine affects Aalto University’s operations. We will update the contents regularly. " />
                <Card2 image={img20} title="Ukraine War" paragraph="On this page, we will gather information on how Russia's invasion of Ukraine affects Aalto University’s operations. We will update the contents regularly. " />
            </div>
        </div>
     );
}
 
export default Information;