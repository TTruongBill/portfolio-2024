"use client";

import Capsule from "../components/Capsule/Capsule";
import Typewriter from "../components/Typewriter/Typewriter";
import SectionFooter from "../components/SectionFooter/SectionFooter";
import ImageWithDescription from "../components/ImageWithDescription/ImageWithDescription";
import SectionHeader from "../components/SectionHeader/SectionHeader";
export default function Home() {

  return (
    <>
      <div className="relative bg-blue-2 text-white w-full h-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center justify-end h-[96px] px-2">
          <h1 className="text-[3rem] font-bold text-center"><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></h1>
          <p>Full Stack Web Developper</p>
        </div>
        <SectionFooter />
      </div>
      <div className="relative bg-blue-3 text-white w-full md:h-full flex justify-center items-center flex-col">
        <SectionHeader title={"What I Do"}/>
        <div className="mt-[7rem] mb-[10rem] w-full flex flex-col items-center">
          <ImageWithDescription 
            title="Réalisation de Maquettes"
            description="Je vais concevoir une expérience utilisateur (UI/UX) en alignement avec les besoins et les spécifications du client."
            image="/picture/figma.png"
          >
            <Capsule title="Figma"/>
            <Capsule title="Photoshop"/>
            <Capsule title="Illustrator"/>
          </ImageWithDescription>
          <ImageWithDescription 
            title="Coding front-end UI/UX"
            description="Je vais développer un site web en me basant sur une maquette fournie par le client ou en concevant une maquette personnalisée en fonction de ses besoins spécifiques."
            image="/picture/figma.png"
            order="left"
          >
            <Capsule title="HTML"/>
            <Capsule title="CSS"/>
            <Capsule title="Typescript"/>
            <Capsule title="NextJS"/>
          </ImageWithDescription>
          <SectionFooter />
        </div>
      </div>
    </>
  );
}
