import H1 from "@components/H1";
import LabelText from "@components/LabelText";
import { useTranslations } from 'next-intl'
import ContactButton from "@newComponents/ContactButton";

export default function SectionContact() {
    const t = useTranslations("CONTACT_SECTION")

    return(
        <section className="bg-blue-1 p-8">
            <div className="flex flex-col items-start justify-between lg:flex-row md:items-center">
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-start lg:justify-around items-center"> 
                    <H1 className="md:w-3/4 mb-6 mr-6 md:mb-0 lg:mr-0 ">{t("DESCRIPTION")}</H1>
                    <ContactButton />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-start lg:justify-around items-start md:items-center">
                    <div className="ml-0 mr-6 my-6 lg:ml-6 ">
                        <LabelText label="Phone" text="514-830-5213" link="tel:+15148305213" className="mb-4"/>
                        <LabelText label="Email" text="tientientruong1@gmail.com" link="mailto:tientientruong1@gmail.com"/>
                    </div>
                    <div>
                        <LabelText label="Github" text="github.com/k1polo" link="github.com/k1polo" className="mb-4"/>
                        <LabelText label="Linkedin" text="linkedin.com/in/tien-tien-truong/" link="linkedin.com/in/tien-tien-truong/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}