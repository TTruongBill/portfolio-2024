export interface DarkImageProps {
    index: number;
    image: string;
    title: string;
    link?: string;
    date?: string;
    git?: string;
    description: string;
    className?: string;
    style?: React.CSSProperties;
}