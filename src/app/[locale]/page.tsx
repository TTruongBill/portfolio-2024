import H1 from "../components/H1/H1";
import Typewriter from "../components/Typewriter/Typewriter";

export default function Home() {

  return (
    <>
      <div className="bg-blue3 text-white w-full h-full flex justify-center items-center flex-col">
        <div>
          <H1><Typewriter text="Tien Tien Bill Truong" delay={100} infinite={true}/></H1>
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
