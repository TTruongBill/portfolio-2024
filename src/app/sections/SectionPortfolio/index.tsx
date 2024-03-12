import SectionHeader from "@sections/SectionHeader"
import SectionFooter from "@sections/SectionFooter"
import SectionContainer from "@newComponents/SectionContainer"
import Image from "next/image"
import Carousel from "@components/Carousel"

export default function SectionPortfolio() {
    const test = ["item1", "item2", "item3", "item4"]
    return (
        <SectionContainer id="projects" bgColor="bg-blue-2" className="px-4 h-full">
            <SectionHeader title="Projects"/>
            <div className="flex flex-row">
                <Carousel />
            </div>
            <SectionFooter />
        </SectionContainer>
    )
}