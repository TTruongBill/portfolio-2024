import React from "react";

export default interface H1Props {
    ref?: React.Ref<HTMLHeadingElement>;
    children: React.ReactNode;
    className?: string;
}