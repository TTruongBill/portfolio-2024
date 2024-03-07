import SectionFooter from "../SectionFooter/SectionFooter";
import Typewriter from "../../components/Typewriter/Typewriter";

export default function SectionHome() {
    return(
        <div className="relative bg-blue-2 text-white w-full h-full flex justify-center items-center flex-col">
            <div className="w-full flex flex-col items-center justify-end h-[96px] px-2">
                <h1 className="text-[3rem] font-bold text-center"><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></h1>
                <p>Full Stack Web Developper</p>
            </div>
            <SectionFooter />
        </div>
    )
}