import { LabelTextProps } from "./types"
export default function LabelText({ label, text }: LabelTextProps) {
    return(
        <div>
            <label className="block text-gray-700">
            {label}
            </label>
            <p>{text}</p>
        </div>
        
    )
}