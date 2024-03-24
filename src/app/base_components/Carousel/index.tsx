"use client"
import React, { useEffect, useMemo } from "react"
import useSwipe from "@/app/hooks/useSwipe"
import './Carousel.css'
import { carouselProps } from "./types"
import DarkImageRef from "@components/DarkImage"
import { H3 } from "@components/Headings"
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
            <div className="whitespace-nowrap" {...swipeHandlers}>
                {
                    images.map((image: string, index: number) => {
                        return (
                            <DarkImageRef ref={refs[index]} index={index} image={image} title={titles[index]} key={index}/>
                        )
                    })
                }
                <div className="flex flex-row justify-around items-center pt-4">
                    <p onClick={() => {swipeRight()}}> left </p>
                    <H3>{(currentImg + 1) + "/" + images.length}</H3>
                    <p onClick={() => {swipeLeft()}}> right </p>
                </div>
            </div>
           
        </div>
    )
}