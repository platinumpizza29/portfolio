import Navbar from "../components/navbar.jsx";
import WorkHistory from "../components/WorkHistory.jsx";
import { RiReactjsFill } from "react-icons/ri";
import { FaGitSquare, FaHtml5, FaNode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Footer from "../components/footer.jsx";
import ProjectCards from "../components/ProjectCards.jsx";
import AwardComp from "../components/AwardComp.jsx";
import Marquee from "react-fast-marquee";
import person from "/public/person.json";
import Lottie from "lottie-react";

export default function HomePage() {
  return (
    <div className={"h-screen w-screen overflow-x-hidden"}>
      <Navbar />
      {/*header section goes here*/}
      <section
        className={
          "grid grid-cols-1 md:grid-cols-2 my-10 p-8 place-items-center"
        }
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className="">
          <h1 className={"font-bold mb-2"}>Hello! I'm Keyur Bilgi</h1>
          <h2 className={"text-4xl"}>
            A Software Developer based in London,
            <span className={"font-bold"}>United Kingdom</span>
          </h2>
          <p className={"my-4"}>
            Passionate in creating great experience for Digital Product
          </p>
          <div className="">
            <button className={"btn btn-neutral mx-4"}>Talk to me!</button>
            <button className={"btn btn-neutral btn-outline mx-4"}>
              See my work
            </button>
            {/*social button add later*/}
          </div>
        </div>
        <Lottie animationData={person} loop={true} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 my-10 p-8 place-items-center">
        <div className="">
          <h2 className={"text-4xl"}>Work Experience</h2>
          <WorkHistory />
        </div>
        <div className="">
          <h2 className={"text-4xl"}>Awards and Recognition</h2>
          <AwardComp />
        </div>
      </section>
      <section className="bg-primary mt-10 p-12">
        <Marquee className="" autoFill={true}>
          <RiReactjsFill className="text-7xl mx-10" />
          <FaNode className="text-7xl mx-10" />
          <FaGitSquare className="text-7xl mx-10" />
          <SiTailwindcss className="text-7xl mx-10 " />
          <SiMongodb className="text-7xl mx-10" />
          <SiMysql className="text-7xl mx-10" />
          <FaHtml5 className="text-7xl mx-10" />
          <TbApi className="text-7xl mx-10" />
        </Marquee>
      </section>
      <section className={"mt-10 p-8 place-items-center"}>
        <h2 className={"text-4xl text-center"}>Selected Works</h2>
        <div className="p-4 md:p-14">
          <ProjectCards />
        </div>
      </section>
      <Footer />
    </div>
  );
}
