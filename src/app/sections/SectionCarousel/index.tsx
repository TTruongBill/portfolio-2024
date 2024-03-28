import React from "react"
import Carousel from "@/app/base_components/Carousel"
import { useTranslations } from "next-intl"

export default function SectionCarousel() {
    const t = useTranslations("PORTFOLIO_SECTION.PROJECTS")
    const images = [
        "/img/wordpress2-mobile.jpg",
        "/img/memo.jpg",
        "/img/signets.jpg",
    ]
    let title: string[] = []
    let descriptions: string[] = []
    let links: string[] = []
    let dates: string[] = []
    let gits: string[] = []

    for (let i = 1; i <= images.length; i++) {
        title.push(t("PROJECT_" + i + ".TITLE"))
        descriptions.push(t("PROJECT_" + i + ".DESCRIPTION"))
        links.push(t("PROJECT_" + i + ".LINK"))
        dates.push(t("PROJECT_" + i + ".DATE"))
        gits.push(t("PROJECT_" + i + ".GIT"))
    }
    
    const titles = ["WordPress", "Memo", "Signets"]


    return (
        <Carousel images={images} titles={titles} descriptions={descriptions} links={links} dates={dates} gits={gits}/>
    )
}