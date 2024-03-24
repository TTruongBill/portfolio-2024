import SectionFooter from "@sections/SectionFooter";
import Typewriter from "@components/Typewriter";
import Image from "next/image";
import ContactButton from "@newComponents/ContactButton";
import SectionContainer from "@newComponents/SectionContainer";
import { H1, H4 } from "@components/Headings";

export default function SectionHome() {
    return(
        <SectionContainer bgColor="bg-blue-1" id="home" className="h-full lg:justify-around lg:flex-row px-0">
            <div className="flex flex-col items-start justify-end h-[252px] px-4 w-full lg:w-1/3 order-1 lg:order-none">
                <H1><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></H1>
                <H4>Full Stack Web Developper</H4>
                <p className="py-6">En tant que finissant en multimédia, j’ai acquis des connaissances et des habiletés qui me permettent d’être efficace et organisé.</p>
                <p>Le développement de site web est mon intérêt principal.</p>
                <ContactButton className="h-fit mt-4"/>
            </div>
            <div className="w-full mb-16 lg:w-1/2">
                <Image className="w-full" src="/img/home.png" alt="picture of Tien Tien's past portfolio" width="500" height="500" />
            </div>
            <SectionFooter />
        </SectionContainer>
    )
}