import { H3 } from "../Headings"
import Image from "next/image"
import { ImageWithDescriptionProps } from "./types"

export default function ImageWithDescription({
    title,
    description,
    image,
    alt,
    width,
    height,
    order,
    className,
    children
} : ImageWithDescriptionProps) {

    const imageStyle = order == "left" ? "md:ml-8" : "md:order-none md:mr-8"
    return(
        <div className="flex flex-col md:flex-row pb-8 w-full lg:w-3/4">
          <div className={`flex flex-col justify-center items-start mt-4 order-1 md:w-1/2 ${imageStyle}`}  >
            <H3>{title}</H3>
            <p className="mt-2">{description}</p>
            <div className={`flex flex-row justify-start flex-wrap ${className ?? ''}`}>
                {children}
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[16/9]">
            <Image className="object-cover w-full" src={image} alt={alt ?? ""} width={width ?? "500"} height={height ?? "500"}></Image>
          </div>
        </div>
    )
}