import { SectionContainerProps } from "./types"

export default function SectionContainer({children, bgColor, id, className}: SectionContainerProps){
    return(
        <div id={id} className={`${bgColor ?? "bg-blue-1"} relative text-white w-full flex justify-center items-center flex-col px-2 ${className}`}>
            {children}
        </div>
    )
}