import H1 from "../H1"
import Capsule from "../Capsule"
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
        <div className="flex flex-col md:flex-row m-2 p-2 pb-8 w-full lg:w-3/4">
          <div className={`flex flex-col justify-center items-start mt-4 order-1 md:w-1/2 ${imageStyle}`}  >
            <H1>{title}</H1>
            <p className="mt-2">{description}</p>
            <div className={`flex flex-row justify-start flex-wrap ${className ?? ''}`}>
                {children}
            </div>
          </div>
          <Image className="w-full md:w-1/2" src={image} alt={alt ?? ""} width={width ?? "500"} height={height ?? "500"}></Image>
        </div>
    )
}