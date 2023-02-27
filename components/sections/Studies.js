import Card1 from "../ui/Card1";
import img19 from "../../public/images/img19.jpg"
import img24 from "../../public/images/img24.jpg"
import img25 from "../../public/images/img25.png"

const Studies = () => {
    return ( 
        <div className="md:px-32 px-5 pb-20 pt-10">
            <h2 className="text-2xl py-10 text-white">Studies and courses open to all</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <Card1 image={img19} title="Lifewide Learning" paragraph={"Select a solution that suits you, ranging from individual courses to programmes that are open for all."} />
                <Card1 image={img24} title="Aalto University Open University" paragraph={"Open University courses are open to everyone regardless of background or age. Open University offers individual courses in Business, Technology, Languages, and Art and Design. Students are admitted to individual courses in the order of registration."} />
                <Card1 image={img25} title="Aalto University Junior" paragraph={"Aalto University Junior is art, science, technology and entrepreneurship for children, young people and teachers - to support teaching, personal joy and a source of enthusiasm."} />
            </div>
        </div>
     );
}
 
export default Studies;