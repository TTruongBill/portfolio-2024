import SectionFooter from "@sections/SectionFooter";
import Typewriter from "@components/Typewriter";
import Image from "next/image";
import ContactButton from "@newComponents/ContactButton";
import SectionContainer from "@newComponents/SectionContainer";
import { H1, H4 } from "@components/Headings";
import { useTranslations } from "next-intl";
import Button from "@components/Button";
import Download from "@components/Svg/Download";

export default function SectionHome() {
    const t = useTranslations("HOME_SECTION")

    return(
        <SectionContainer bgColor="bg-blue-1" id="home" className="lg:h-full lg:justify-around lg:flex-row px-0">
            <div className="flex flex-col items-start justify-end w-full h-[340px] max-h-[340px] sm:h-auto lg:w-1/3 order-1 lg:order-none">
                <H1><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></H1>
                <H4>Full Stack Web Developper</H4>
                <p className="py-6 whitespace-pre-line">{t("DESCRIPTION")}</p>
                <div className="mt-4 flex flex-row">
                    <ContactButton className="h-fit" />
                        <Button link="/img/CV.pdf" color="purple" download>
                            <span className="pr-2">CV FR</span><Download/>
                        </Button>
                </div>
            </div>
            <div className="w-full mb-4 lg:w-1/2 max-w-[700px] rounded-full">
                <Image placeholder="empty" priority={true} className="w-full rounded-full" src="/img/tien_pic.png" alt="picture of Tien Tien" width="500" height="500" />
            </div>
            <SectionFooter />
        </SectionContainer>
    )
}