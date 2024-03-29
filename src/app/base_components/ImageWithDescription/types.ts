export interface ImageWithDescriptionProps{
    title: string;
    description: string;
    image: string;
    alt?: string;
    width?: number;
    height?: number;
    order?: string;
    className?: string;
    children: React.ReactNode;
}