import Capsule from "../../components/Capsule/Capsule";
import SectionHeader from "../SectionHeader/SectionHeader";
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import SectionFooter from "../SectionFooter/SectionFooter";
import { useTranslations } from "next-intl";

export default function SectionAbout() {
    const t = useTranslations("ABOUT_SECTION")

    return(
      <div className="relative bg-blue-3 text-white w-full md:h-full flex justify-center items-center flex-col">
        <SectionHeader title={"ABOUT"}/>
        <div className="mt-[7rem] mb-[10rem] w-full flex flex-col items-center">
          <ImageWithDescription 
            title={t("TITLE_UX")}
            description={t("DESCRIPTION_UX")}
            image="/picture/figma.png"
          >
            <Capsule title="Figma"/>
            <Capsule title="Photoshop"/>
            <Capsule title="Illustrator"/>
          </ImageWithDescription>
          <ImageWithDescription 
            title={t("TITLE_FRONTEND")}
            description={t("DESCRIPTION_FRONTEND")}
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

    )
}