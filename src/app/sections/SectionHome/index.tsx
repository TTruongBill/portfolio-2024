import SectionFooter from "@sections/SectionFooter";
import Typewriter from "@components/Typewriter";
import Image from "next/image";
import ContactButton from "@newComponents/ContactButton";

export default function SectionHome() {
    return(
        <div className="relative bg-blue-2 text-white w-full h-full flex justify-center lg:justify-around items-center flex-col lg:flex-row">
            <div className="flex flex-col items-start justify-end h-[252px] px-2 w-full lg:w-1/3 order-1 lg:order-none">
                <h1 className="text-[2rem] sm:text-[3rem] font-bold text-start"><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></h1>
                <h2 className="text-[1.5rem]">Full Stack Web Developper</h2>
                <p className="py-6">En tant que finissant en multimédia, j’ai acquis des connaissances et des habiletés qui me permettent d’être efficace et organisé.</p>
                <p>Le développement de site web est mon intérêt principal.</p>
                <ContactButton className="h-fit mt-4"/>
            </div>
            <div className="w-full mb-16 lg:w-1/2">
                <Image className="w-full" src="/picture/home.png" alt="picture of Tien Tien's past portfolio" width="500" height="500" />
            </div>
            <SectionFooter />
        </div>
    )
}