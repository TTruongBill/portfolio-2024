"use client"
import React from "react"
import Image from "next/image"

export default function Carousel() {
    const [currentImg, setCurrentImg] = React.useState(0)
    const images = [
        "/img/wordpress2.jpg",
        "/img/memo.jpg",
        "/img/signets.jpg",
    ]

    return (
        <div>
            <div>
                <Image src={images[currentImg]} alt="carousel image" width={500} height={800}/>
                <p>image</p>
            </div>
           
        </div>
    )
}