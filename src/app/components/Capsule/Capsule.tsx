import { CapsuleProps } from "./types"

export default function Capsule({ id, title } : CapsuleProps) {
    return(
        <div id={id} className="rounded-full px-5 py-1 mr-4 text-black bg-gray-1">{title}</div>
    )
}