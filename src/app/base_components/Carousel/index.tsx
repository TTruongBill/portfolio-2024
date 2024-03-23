"use client"
import React, { useEffect, useMemo } from "react"
import Image from "next/image"
import H1 from '@components/H1'
import useSwipe from "@/app/hooks/useSwipe"
import './Carousel.css'
import { carouselProps } from "./types"

export default function Carousel({ images, refs, titles }: carouselProps){
    const [currentImg, setCurrentImg] = React.useState(0)

    const ref = useMemo(() => [...refs], [refs]);

    function swipeRight() {
        setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
    }

    function swipeLeft() {
        setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
    }

    const swipeHandlers = useSwipe({ 
        onSwipedLeft: () => {
            console.log()
            swipeLeft();
        }, 
        onSwipedRight: () => {
            swipeRight();
        } 
    });

    useEffect(() => {
        if (ref) {
            ref.map((ref) => {
                if(ref.current) {
                    ref.current.style.transform = `translateX(calc(${currentImg * -100}% + ${currentImg * -2}rem))`
                }
            })
        }
    }, [currentImg, ref]);

    return (
        <div className="my-16">
            <div className="carousel whitespace-nowrap" {...swipeHandlers}>
                {
                    images.map((image: string, index: number) => {
                        return (
                            <div className="inline-block img_container" ref={refs[index]} key={index}>
                                <Image src={image} alt="carousel image" width={500} height={500} className="aspect-[3/4] object-cover h-full brightness-50 rounded-[15px]"/>
                                <H1 className="absolute left-4 bottom-6">{titles[index]}</H1>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}