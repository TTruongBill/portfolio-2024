import './SectionHeader.css';
import { SectionHeaderProps } from './types';
import H1 from '../H1/H1';

export default function SectionHeader({ title }: SectionHeaderProps) {
    return(
        <div className="sectionHeader w-full absolute top-0 left-0 md:pl-[20%] justify-center items-center flex flex-col md:w-[500px]">
            <div className='flex justify-center items-center'>
                <div className="vertical-line" />
            </div>
            <H1>{title}</H1>
        </div>
    )
}