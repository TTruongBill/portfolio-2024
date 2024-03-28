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
        <div className="w-full flex flex-col items-center">
          <ImageWithDescription 
            title={t("TITLE_UX")}
            description={t("DESCRIPTION_UX")}
            image="/img/ui_design.jpg"
          >
            <Capsule>Figma</Capsule>
            <Capsule>Photoshop</Capsule>
            <Capsule>Illustrator</Capsule>
          </ImageWithDescription>
          <ImageWithDescription 
            title={t("TITLE_FRONTEND")}
            description={t("DESCRIPTION_FRONTEND")}
            image="/img/web_dev.jpg"
            order="left"
          >
            <Capsule>HTML</Capsule>
            <Capsule>CSS</Capsule>
            <Capsule>Typescript</Capsule>
            <Capsule>NextJs</Capsule>
          </ImageWithDescription>
          <ContactButton className="md:text-[1.25rem] mr-0"/>
        </div>
        <SectionFooter />
      </SectionContainer>
    )
}