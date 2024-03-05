import { ButtonProps } from "./types"
import "./Button.css"

export default function Button({ id, title, link, className, ...props } : ButtonProps) {
    return(
        <a href={link} id={id} className={`rounded-full px-6 py-2 mr-4 text-white bg-blue-2 ${className}`} {...props}>{title}</a>
    )
}