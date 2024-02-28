import './SectionFooter.css';
import Triangle from '../Triangle/Triangle';

export default function SectionFooter() {
    return(
        <div className="absolute bottom-0 left-0 pl-[20%]">
            <p>Scroll down</p>
            <div className='relative animate-bounce'>
                <Triangle />
            </div>
            <div className="vertical-line"></div>
        </div>
    )
}