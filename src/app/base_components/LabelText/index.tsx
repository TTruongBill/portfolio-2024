import { LabelTextProps } from "./types"

export default function LabelText({ label, text, className}: LabelTextProps) {
    return(
        <div className={className}>
            <label className="block text-blue-4">
            {label}
            </label>
            <p>{text}</p>
        </div>
        
    )
}