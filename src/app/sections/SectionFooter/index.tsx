import './SectionFooter.css';
import Triangle from '@components/Svg/Triangle';
import { useTranslations } from 'next-intl';

export default function SectionFooter() {
    const t = useTranslations("SECTION_FOOTER")
    return(
        <div className="sectionFooter w-full absolute bottom-0 left-0 justify-center items-center flex flex-col md:w-[500px]">
            <p>{t("SCROLL_DOWN")}</p>
            <div className='relative animate-bounce'>
                <Triangle />
            </div>
            <div className='hidden md:flex justify-center items-center '>
                <div className="vertical-line" />
            </div>
        </div>
    )
}