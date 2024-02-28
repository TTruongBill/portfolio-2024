import { LinkProps } from "./types"

export default function Link({ href, children } : LinkProps) {
    return (
        <a className="mx-2" href={href}>{children}</a>
    )
}