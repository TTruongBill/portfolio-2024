export interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
    title?: string;
    link: string;
    color?: string;
}