import { CapsuleProps } from "./types"

export default function Capsule({ id, title, ...props } : CapsuleProps) {
    return(
        <div id={id} className="rounded-full px-5 py-1 mr-2 mt-4 text-black bg-gray-1" {...props}>{title}</div>
    )
}