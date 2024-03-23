'use client'
import React from "react"
import Carousel from "@/app/base_components/Carousel"

export default function SectionCarousel() {
    const images = [
        "/img/wordpress2-mobile.jpg",
        "/img/memo.jpg",
        "/img/signets.jpg",
    ]
    
    const titles = ["WordPress", "Memo", "Signets"]
    const img1 = React.useRef<HTMLDivElement>(null)
    const img2 = React.useRef<HTMLDivElement>(null)
    const img3 = React.useRef<HTMLDivElement>(null)

    return (
        <Carousel images={images} refs={[img1, img2, img3]} titles={titles} />
    )
}