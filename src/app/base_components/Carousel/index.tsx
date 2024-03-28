"use client"
import React, { useEffect, useRef } from "react"
import useSwipe from "@/app/hooks/useSwipe"
import './Carousel.css'
import { carouselProps } from "./types"
import DarkImageRef from "@components/DarkImage"
import { H3 } from "@components/Headings"
import Triangle from "@components/Svg/Triangle"

export default function Carousel({ images, titles, descriptions, links, dates, gits }: carouselProps){
    const [currentImg, setCurrentImg] = React.useState(0)
    
    const refs = useRef<Array<HTMLDivElement | null>>([])

    function swipeRight() {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    }

    function swipeLeft() {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    }

    const swipeHandlers = useSwipe({ 
        onSwipedLeft: () => {
            swipeLeft();
        }, 
        onSwipedRight: () => {
            swipeRight();
        } 
    });

    useEffect(() => {
            refs.current = refs.current.slice(0, images.length);
    }, [refs, images.length]);

    return (
        <div className="">
            <div className="whitespace-nowrap max-w-[1000px]" {...swipeHandlers}>
                {
                    images.map((image: string, index: number) => {
                        return (
                            <DarkImageRef ref={el => refs.current[index] = el} index={index} image={image} title={titles[index]} description={descriptions[index]} link={links?.[index]} date={dates?.[index]} git={gits?.[index]} key={index} className="cursor-pointer whitespace-pre-line" 
                            style={{transform: `translateX(calc(${currentImg * -100}% + ${currentImg * -2}rem))`}}/>
                        )
                    })
                }
                <div className="flex flex-row justify-around items-center pt-4">
                    <p className="rotate-180 cursor-pointer" onClick={() => {swipeRight()}}> <Triangle /> </p>
                    <H3>{(currentImg + 1) + "/" + images.length}</H3>
                    <p className="cursor-pointer" onClick={() => {swipeLeft()}}> <Triangle /> </p>
                </div>
            </div>
           
        </div>
    )
}