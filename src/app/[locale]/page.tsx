import Capsule from "../components/Capsule/Capsule";
import Image from "next/image";
import H1 from "../components/H1/H1";
import Typewriter from "../components/Typewriter/Typewriter";
import SectionFooter from "../components/SectionFooter/SectionFooter";

export default function Home() {

  return (
    <>
      <div className="bg-blue-3 text-white w-full h-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center justify-end h-[96px]">
          <h1 className="text-[3rem] font-bold"><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></h1>
          <p>Full Stack Web Developper</p>
        </div>
        <SectionFooter />
      </div>
      <div className="bg-blue-2 text-white w-full h-full flex justify-center items-center flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-start">
          <h1>Tien Tien Bill Truong</h1>
          <p>Full Stack Web Developper</p>
          <div>
            <Capsule title="Contact Me"/>
            
          </div>

        </div>
        <Image src="/picture/figma.png" alt="figma design" width={"500"} height={"500"}></Image>
      </div>

    </div>
  </>
  );
}
