enum bgColorList {
    "bg-blue-1",
    "bg-blue-2",
    "bg-blue-3",
}

export interface SectionContainerProps {
    children: React.ReactNode;
    bgColor?: keyof typeof bgColorList;
    id?: string;
    className?: string;
}
