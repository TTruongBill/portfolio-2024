import Capsule from "@components/Capsule";
import SectionHeader from "@sections/SectionHeader";
import ImageWithDescription from "@components/ImageWithDescription";
import SectionFooter from "@sections/SectionFooter";
import { useTranslations } from "next-intl";
import ContactButton from "@newComponents/ContactButton";
import SectionContainer from "@newComponents/SectionContainer";

export default function SectionAbout() {
    const t = useTranslations("ABOUT_SECTION")

    return(
      <SectionContainer bgColor="bg-blue-3" id="about">
        <SectionHeader title={"ABOUT"}/>
        <div className="my-[5rem] md:mt-[7rem] md:mb-[10rem] w-full flex flex-col items-center">
          <ImageWithDescription 
            title={t("TITLE_UX")}
            description={t("DESCRIPTION_UX")}
            image="/img/figma.png"
          >
            <Capsule title="Figma"/>
            <Capsule title="Photoshop"/>
            <Capsule title="Illustrator"/>
          </ImageWithDescription>
          <ImageWithDescription 
            title={t("TITLE_FRONTEND")}
            description={t("DESCRIPTION_FRONTEND")}
            image="/img/figma.png"
            order="left"
          >
            <Capsule title="HTML"/>
            <Capsule title="CSS"/>
            <Capsule title="Typescript"/>
            <Capsule title="NextJS"/>
          </ImageWithDescription>
          <ContactButton className="md:text-[1.25rem] mr-0"/>
        </div>
        <SectionFooter />
      </SectionContainer>
    )
}