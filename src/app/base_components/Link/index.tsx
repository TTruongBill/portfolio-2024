import { LinkProps } from "./types"

export default function Link({ href, children, className } : LinkProps) {
    return (
        <a className={`mx-2 ${className}`} href={href}>{children}</a>
    )
}