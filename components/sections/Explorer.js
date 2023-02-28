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
import img25 from "../../public/images/img25.jpg"
import img26 from "../../public/images/img26.jpg"
import img27 from "../../public/images/img27.jpg"
import img28 from "../../public/images/img28.jpg"
import img29 from "../../public/images/img29.jpg"
import photo2 from "../../public/images/photo2.jpg"
import photo3 from "../../public/images/photo3.jpg"
import photo4 from "../../public/images/photo4.jpg"
import photo5 from "../../public/images/photo5.jpg"
import photo6 from "../../public/images/photo6.jpg"
import photo7 from "../../public/images/photo7.jpg"
import photo8 from "../../public/images/photo8.jpg"
import pen from "../../public/images/pen.png"
import phone from "../../public/images/phone.png"
import folder from "../../public/images/folder.png"
import Card2 from "../ui/Card2";
import BigCard from "../ui/BigCard";
import Card3 from "../ui/Card3";

const Explorer = () => {
    const linksArr = ["Explore our vibrant innovation ecosystem","Explore our campus","Book a space"]
    return ( 
        <div className="bg-gray1 py-20 relative ">
            <div className="h-96 bg-red-500">
                <Image alt="" src={img2} className="h-full object-cover object-center" />
            </div>
            <div className="absolute md:max-w-6xl md:w-full w-[22rem] md:left-52 left-5 md:top-[17.5rem] top-[18.2rem] bg-blue1 md:h-72">
                <div className="md:pl-20 pl-5 md:py-14 pt-5 pb-20"> 
                    <h1 className="md:text-7xl text-3xl text-white font-semibold">Explore Aalto University</h1>
                </div>
                <div className="border-t text-white grid md:grid-cols-3 grid-cols-1 justify-items-center content-start overflow-hidden">
                    <div className="md:pt-10 py-6 md:py-0">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Study at Aalto</Link>
                    </div>
                    <div className="md:border-x border-y md:border-y-0 px-20 md:py-9 py-5">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Open Positions</Link>
                    </div>
                    <div className="md:pt-10 py-6 md:py-0">
                        <Link href={'/'} className="underline text-2xl hover:bg-white hover:text-black">Contact Us</Link>
                    </div>
                </div>

            </div>
            <div className="md:pt-32 pt-64 md:px-20 text-white">
                <h3 className="text-center md:text-3xl text-2xl md:hover:pr-24 hover:pr-5">Important quicklinks</h3>
                <div className=" flex flex-col md:flex-row px-20 md:px-0 justify-center md:gap-20">
                    {[{img : pen, title : "For personnel"},{img : folder, title : "Aalto HandBook"}, {img : phone, title : "Safety"}].map(item =>{
                        return(
                            <Link key={item} href={'/'} className="group flex items-center gap-5 pt-5" >
                                <Image alt="" src={item.img} className="md:w-20 w-16 rounded-full group-hover:opacity-70 duration-200"/> <span className="group-hover:bg-neutral-700 duration-200 text-lg">{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="text-white md:px-32 px-5 pt-20">
                <h3 className="text-2xl">Explorer Our Six Schools</h3>
                <h4 className="text-lg pt-5">Scientific research and artistic activities are carried out at six schools and their departments and units.</h4>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                    {[
                        {image : img12, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." },
                        {image : img25, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." },
                        {image : img26, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." },
                        {image : img27, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." },
                        {image : img28, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." },
                        {image : img29, title : "School of Engineering", paragraph : "The School of Arts, Design and Architecture is one of the..." }
                ].map(item=>
                    <Card2 key={item} image={item.image} title={item.title} paragraph={item.paragraph}/>
                )}
                    
                </div>
            </div>
            <div className="pt-10 md:px-32 px-5">
                <BigCard image={img13} title={"Campus - lively and thriving"}  link={linksArr} paragraph="Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together." />
                <BigCard className={"flex-row-reverse pt-10"} image={img14} link={linksArr} title={"Virtual Campus Experience"}  paragraph="Explore Aalto University’s campus from anywhere in the world! Our digital guides, an Aalto University student and an assistant professor, introduce you to our learning facilities, laboratories, workshops, service spots and outdoor spaces. The tour can be experienced on desktop, mobile or VR headset. " />
            </div>
            <div className="md:px-32 pt-20 grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-2">
                {[{image : img15, text : "Building Finland's first quantum computer. Photo: Aalto University" },
                  {image : photo2, text : "Creative sustainability. Photo: Aalto University / Mikko Raskinen." },
                  {image : photo3, text : "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo." },
                  {image : photo4, text : "Trail to the Laajalahti Nature Reserve and one of South Finland's best birdwatching bay. Photo: Aalto University." },
                  {image : photo5, text : "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi." },
                  {image : photo6, text : "Aalto University’s Art & Design ranked 6th in the world. QS – Art & Design 2022." },
                  {image : photo7, text : "One of the most international universities in Europe. Photo: Aalto Design Factory / Bijan Mokhtari." },
                  {image : photo8, text : "Educating future thought-leaders. Photo: Aalto Vision Forum / Lasse Lecklin." }  
                    ].map(item=>
                        <Card3 key={item} image={item.image} link={item.text} />
                    )}
            </div>
            <div className="pt-32 md:px-44 text-white">
                <h3 className="text-center text-3xl md:hover:pr-24 hover:pr-5">Community voices</h3>
                <div className=" md:flex px-20 justify-between gap-20">
                    {[{img : img17, title : " Watch our videos "},{img : img18, title : "Read our blogs"}, {img : img16, title : "Listen to podcasts"}].map(item =>{
                        return(
                            <Link key={item} href={'/'} className="group flex items-center gap-5 pt-5" >
                                <Image alt="" src={item.img} className="w-20 rounded-full group-hover:opacity-70 duration-200"/> <span className="group-hover:bg-neutral-700 duration-200 md:text-lg">{item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Explorer;