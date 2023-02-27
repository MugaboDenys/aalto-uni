import Card1 from "../ui/Card1";
import img21 from "../../public/images/img21.jpg"
import img22 from "../../public/images/img22.jpg"

const Research = () => {
    return ( 
        <div className="px-32 bg-gray2 py-20">
            <div className="max-w-4xl text-white">
                <h2 className="text-3xl"> Read about our research and donate</h2>
                <p className="pt-6">At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future.</p>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-10">
                <Card1 image={img21} title="Reasearch & Art" className={""} paragraph={"Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health."} />
                <Card1 image={img22} title="Reasearch & Art" className={""} paragraph={"Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health."} />
            </div>
        </div>
     );
}
 
export default Research;