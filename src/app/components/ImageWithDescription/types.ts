export interface ImageWithDescriptionProps{
    title: string;
    description: string;
    image: string;
    alt?: string;
    width?: number;
    height?: number;
    order?: string;
    children: React.ReactNode;
}