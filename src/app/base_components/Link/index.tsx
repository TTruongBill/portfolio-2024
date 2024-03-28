import { LinkProps } from "./types"

export default function Link({ href, children, className, target } : LinkProps) {
    return (
        <a className={`mx-2 ${className ?? ''}`} href={href} target={target ?? ""}>{children}</a>
    )
}