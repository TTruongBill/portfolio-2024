import { useTranslations } from "next-intl";
import H1 from "../components/H1/H1";

export default function Home() {
  const t = useTranslations("HOME");
  
  return (
    <>
      <div className="bg-blue3 text-white w-full h-full flex justify-center items-center flex-col">
        <div>
          <H1>Tien Tien Bill Truong</H1>
          <p>Full Stack Web Developper</p>
        </div>
      </div>
      <div className="bg-blue3 text-white w-full h-full flex justify-center items-center flex-col">
      <div>
        <h1>Tien Tien Bill Truong</h1>
        <p>Full Stack Web Developper</p>
      </div>
    </div>
  </>
  );
}
