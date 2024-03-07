import './SectionHeader.css';
import { SectionHeaderProps } from './types';
import H1 from '../../components/H1/H1';
import { useTranslations } from 'next-intl';

export default function SectionHeader({ title }: SectionHeaderProps) {
    const t = useTranslations("HEADER_SECTION");

    return(
        <div className="sectionHeader w-full absolute top-0 left-0 justify-center items-center flex flex-col md:w-[500px]">
            <div className='flex justify-center items-center'>
                <div className="vertical-line" />
            </div>
            <H1>{t(title)}</H1>
        </div>
    )
}