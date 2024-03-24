import React, { useState, forwardRef, Ref } from "react";
import Image from "next/image";
import { H3 } from "@components/Headings";
import { DarkImageProps } from "./types";

// eslint-disable-next-line react/display-name
const DarkImage = forwardRef((props: DarkImageProps, ref: Ref<HTMLDivElement>) => {
    const { index, image, title } = props;
    const [clicked, setClicked] = useState(false);

    return (
        <div className="inline-block img_container" ref={ref} key={index} onClick={() => setClicked(!clicked)}>
            <Image src={image} alt="carousel image" width={500} height={500} className={`aspect-[3/4] object-cover h-full ${clicked ? "brightness-[0.2]" : "brightness-50"} rounded-[15px]`} />
            <div className="absolute left-8 bottom-8 h-full flex flex-col justify-end">
                <H3>{title}</H3>
                <p className={`text-wrap overflow-y-auto mt-4 ${clicked ? "opacity-1 h-[20vh] sm:h-[10vh]" : "opacity-0 h-0"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate justo eu mattis commodo. Duis sollicitudin tincidunt felis, eu semper dolor suscipit vel. Curabitur lobortis ligula in ligula interdum iaculis. Cras in consequat est, gravida finibus metus. Ut sit amet nibh vel augue dapibus sodales. Suspendisse vitae tincidunt lectus. Donec id libero suscipit dui iaculis eleifend. Aenean sapien elit, consectetur nec orci quis, luctus ultricies lacus. Donec bibendum nunc vel rutrum dapibus. Quisque efficitur arcu ex, quis varius lacus pretium fermentum. Proin nec magna est. Sed quis ex consectetur, suscipit nibh sit amet, rhoncus ante. Proin fermentum dapibus placerat.</p>
            </div>
        </div>
    );
});

export default DarkImage;