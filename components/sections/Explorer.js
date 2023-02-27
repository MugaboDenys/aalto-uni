import Image from "next/image";
import Link from "next/link";
import img2 from "../../public/images/img2.jpg"
import img12 from "../../public/images/img12.jpg"
import img13 from "../../public/images/img13.jpg"
import img14 from "../../public/images/img14.jpg"
import img15 from "../../public/images/img15.jpg"
import img16 from "../../public/images/img16.jpg"
import img17 from "../../public/images/img17.jpg"
import img18 from "../../public/images/img18.jpg"
import pen from "../../public/images/pen.png"
import phone from "../../public/images/phone.png"
import folder from "../../public/images/folder.png"
import Card2 from "../ui/Card2";
import BigCard from "../ui/BigCard";
import Card3 from "../ui/Card3";

const Explorer = () => {
    return ( 
        <div className="bg-gray1 py-20 relative ">
            <div className="h-96 bg-red-500">
                <Image alt="" src={img2} className="h-full object-cover object-center" />
            </div>
            <div className="absolute max-w-6xl w-full left-52 top-[17.5rem] bg-blue1 h-72">
                <div className="pl-20 py-14"> 
                    <h1 className="text-7xl text-white font-semibold">Explore Aalto University</h1>
                </div>
                <div className="border-t text-white grid grid-cols-3 justify-items-center overflow-hidden">
                    <div className="pt-10">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Study at Aalto</Link>
                    </div>
                    <div className="border-x px-20 py-9">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Study at Aalto</Link>
                    </div>
                    <div className="pt-10">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Study at Aalto</Link>
                    </div>
                </div>

            </div>
            <div className="pt-32 px-20 text-white">
                <h3 className="text-center text-3xl hover:pr-24">Important quicklinks</h3>
                <div className=" flex justify-center gap-20">
                    {[{img : pen, title : "For personnel"},{img : folder, title : "For personnel"}, {img : phone, title : "For personnel"}].map(item =>{
                        return(
                            <Link key={item} href={'/'} className="group flex items-center gap-5 pt-5" >
                                <Image alt="" src={item.img} className="w-20 rounded-full group-hover:opacity-70 duration-200"/> <span className="group-hover:bg-neutral-700 duration-200 text-lg">{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="text-white px-32 pt-20">
                <h3 className="text-2xl">Explorer Our Six Schools</h3>
                <h4 className="text-lg">Scientific research and artistic activities are carried out at six schools and their departments and units.</h4>
                <div className="grid grid-cols-2 gap-4 pt-10">
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                    <Card2 image={img12} title="School of Engineering" paragraph="The School of Arts, Design and Architecture is one of the..." />
                </div>
            </div>
            <div className="pt-10 px-32">
                <BigCard image={img13} title={"Campus - lively and thriving"} link="Explore our vibrant innovation ecosystem" paragraph="Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together." />
                <BigCard className={"flex-row-reverse pt-10"} image={img13} title={"Campus - lively and thriving"}  link="Explore our vibrant innovation ecosystem" paragraph="Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together." />
            </div>
            <div className="px-32 pt-20 grid grid-cols-4 gap-10">
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
                <Card3 image={img15} link={"Building Finland's first quantum computer. Photo: Aalto University"} />
            </div>
            <div className="pt-32 px-44 text-white">
                <h3 className="text-center text-3xl hover:pr-24">Community voices</h3>
                <div className=" flex justify-between gap-20">
                    {[{img : img17, title : "For personnel"},{img : img18, title : "For personnel"}, {img : img16, title : "For personnel"}].map(item =>{
                        return(
                            <Link key={item} href={'/'} className="group flex items-center gap-5 pt-5" >
                                <Image alt="" src={item.img} className="w-20 rounded-full group-hover:opacity-70 duration-200"/> <span className="group-hover:bg-neutral-700 duration-200 text-lg">{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Explorer;