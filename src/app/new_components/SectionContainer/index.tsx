import { SectionContainerProps } from "./types"

export default function SectionContainer({children, bgColor, id, className}: SectionContainerProps){
    return(
        <div id={id} className={`${bgColor ?? "bg-blue-1"} px-4 py-[6rem] md:pt-[8rem] md:pb-[10rem] relative text-white w-full flex justify-center items-center flex-col ${className ?? ''}`}>
            {children}
        </div>
    )
}