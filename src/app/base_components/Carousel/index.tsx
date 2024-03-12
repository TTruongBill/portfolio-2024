"use client"
import React from "react"
import Image from "next/image"
import H1 from '@components/H1'
import useSwipe from "@/app/hooks/useSwipe"

export default function Carousel() {
    const [currentImg, setCurrentImg] = React.useState(0)
    const images = [
        "/img/wordpress2-mobile.jpg",
        "/img/memo.jpg",
        "/img/signets.jpg",
    ]
    const swipeHandlers = useSwipe({ 
        onSwipedLeft: () => console.log('left'), 
        onSwipedRight: () => console.log('right') 
    });

    return (
        <div>
            <div className="relative w-full aspect-[3/4]">
                <div {...swipeHandlers}>
                    <Image src={images[currentImg]} alt="carousel image" width={500} height={500} className="object-cover h-full brightness-50 rounded-[15px]"/>
                    <H1 className="absolute left-4 bottom-6">image</H1>
                </div>
            </div>
           
        </div>
    )
}