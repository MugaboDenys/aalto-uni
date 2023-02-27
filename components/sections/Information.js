import Card2 from "../ui/Card2";
import img20 from "../../public/images/img20.png"
import img23 from "../../public/images/img23.jpg"

const Information = () => {
    return ( 
        <div className="md:px-32 px-5 py-20 bg-gray1 text-white">
            <h2 className="text-3xl pb-10">Information</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                <Card2 image={img20} title="Ukraine War" paragraph="On this page, we will gather information on how Russia's invasion of Ukraine affects Aalto University’s operations. We will update the contents regularly. " />
                <Card2 image={img23} title="Information on coronavirus" paragraph="Information on the effects of coronavirus and COVID-19 on... " />
            </div>
        </div>
     );
}
 
export default Information;