/* eslint-disable react/display-name */
import React from "react";
import HeadingProps from "./types";

const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h1 className={`text-h1 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h1>
  });
  
const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h2 className={`text-h2 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h2>
});

const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h3 className={`text-h3 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h3>
});

const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h4 className={`text-h4 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h4>
});

const H5 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h5 className={`text-h5 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h5>
});

const H6 = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
    return <h6 className={`text-h6 font-bold ${props.className ?? ''}`}ref={ref}>{props.children}</h6>
});
  
export { H1, H2, H3, H4, H5, H6 };