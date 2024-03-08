import SectionFooter from "@sections/SectionFooter";
import Typewriter from "@components/Typewriter";

export default function SectionHome() {
    return(
        <div className="relative bg-blue-2 text-white w-full h-full flex justify-center items-center flex-col">
            <div className="w-1/2 flex flex-col items-center justify-end h-[96px] px-2">
                <h1 className="text-[3rem] font-bold text-center"><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></h1>
                <p>Full Stack Web Developper</p>
            </div>
            <div className="w-1/2">
                <div className="">

                </div>
            </div>
            <SectionFooter />
        </div>
    )
}