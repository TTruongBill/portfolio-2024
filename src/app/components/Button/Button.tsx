import { ButtonProps } from "./types"
import "./button.css"
export default function Button({ id, title, link } : ButtonProps) {
    return(
        <a href={link} id={id} className="rounded-full px-6 py-2 mr-4 text-white bg-blue2">{title}</a>
    )
}