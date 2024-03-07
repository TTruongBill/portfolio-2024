import React from "react";
import H1Props from "./types";

// eslint-disable-next-line react/display-name
const H1 = React.forwardRef<HTMLHeadingElement, H1Props>((props, ref) => {
    return <h1 className={`text-2xl font-bold ${props.className}`}ref={ref}>{props.children}</h1>
  });
  
export default H1;