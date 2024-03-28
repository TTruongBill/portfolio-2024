'use client'

import React, { useState, forwardRef, Ref } from "react";
import Image from "next/image";
import { H3 } from "@components/Headings";
import { DarkImageProps } from "./types";
import Link from "@components/Link";

// eslint-disable-next-line react/display-name
const DarkImage = forwardRef((props: DarkImageProps, ref: Ref<HTMLDivElement>) => {
    const { index, image, title, className, style, description, link, date, git } = props;
    const [clicked, setClicked] = useState(false);

    return (
        <div style={style} className={`inline-block img_container ${className ?? ''}`} ref={ref} key={index} onClick={() => setClicked(!clicked)}>
            <Image src={image} alt="carousel image" width={500} height={500} className={`aspect-[3/4] object-cover h-full ${clicked ? "brightness-[0.2]" : "brightness-50"} rounded-[15px]`} />
            <div className={`absolute left-8 h-full flex flex-col justify-end ${clicked ? " bottom-8" : " bottom-2"}`}>
                <H3>{title}</H3>
                <p className={`text-wrap overflow-y-auto mt-4 ${clicked ? "opacity-1 h-[74%] sm:h-[68%] md:h-[74%] max-w-[450px] sm:max-w-none" : "opacity-0 h-0"}`}>
                    {description}
                    {
                        link && (
                            <>
                                <br />
                                <br />
                                Website: <Link href={link} target="_blank" className="text-blue-500 hover:text-blue-400 underline !mx-0">{link}</Link>
                            </>
                        )
                    }
                    {
                        git && (
                            <>
                                <br />
                                <br />
                                Github: <Link href={git} target="_blank" className="text-blue-500 hover:text-blue-400 underline !mx-0">{git}</Link>
                            </>
                        )
                    }
                    {   
                        date && (
                            <>
                                <br />
                                <br />
                                {date}
                            </>
                        )}
                </p>
            </div>
        </div>
    );
});

export default DarkImage;