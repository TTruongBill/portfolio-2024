import SectionHeader from "@sections/SectionHeader"
import SectionFooter from "@sections/SectionFooter"
import SectionContainer from "@newComponents/SectionContainer"
import SectionCarousel from "@sections/SectionCarousel"

export default function SectionPortfolio() {

    return (
        <SectionContainer id="portfolio" bgColor="bg-blue-2" className="px-4 py-4">
            <SectionHeader title="PORTFOLIO"/>
            <div className="flex flex-col md:mt-[7rem] md:mb-[10rem]">
            <SectionCarousel />
            </div>
            <SectionFooter />
        </SectionContainer>
    )
}