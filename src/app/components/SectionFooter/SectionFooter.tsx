import './SectionFooter.css';
import Triangle from '../Triangle/Triangle';

export default function SectionFooter() {
    return(
        <div className="sectionFooter w-full absolute bottom-0 left-0 justify-center items-center flex flex-col md:w-[500px]">
            <p>Scroll down</p>
            <div className='relative animate-bounce'>
                <Triangle />
            </div>
            <div className='flex justify-center items-center'>
                <div className="vertical-line" />
            </div>
        </div>
    )
}