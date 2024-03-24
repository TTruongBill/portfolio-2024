import React from "react";

export default interface HeadingProps{
    ref?: React.Ref<HTMLHeadingElement>;
    children: React.ReactNode;
    className?: string;
}