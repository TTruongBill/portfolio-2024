import SectionHome from "@sections/SectionHome";
import SectionAbout from "@sections/SectionAbout";
import SectionContact from "@/app/sections/SectionContact";
import SectionPortfolio from "../sections/SectionPortfolio";

export default function Home() {
  return (
    <>
      <SectionHome />
      <SectionAbout />
      <SectionPortfolio />
      <SectionContact />
    </>
  );
}
