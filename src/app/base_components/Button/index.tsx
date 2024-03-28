import { ButtonProps } from "./types"
import "./Button.css"

export default function Button({ id, children, link, className, color, ...props } : ButtonProps) {
    return(
        <a href={link} id={id} className={`${color ? "purple-button" : 'text-white bg-blue-2'} rounded-full px-6 py-2 mr-4 ${className ?? ''}`} {...props}>{children}</a>
    )
}