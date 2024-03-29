import Navbar from "../components/navbar.jsx";
import WorkHistory from "../components/WorkHistory.jsx";
import {RiReactjsFill} from "react-icons/ri";
import {FaGitSquare, FaHtml5, FaNode} from "react-icons/fa";
import {SiMongodb, SiMysql, SiTailwindcss} from "react-icons/si";
import {TbApi} from "react-icons/tb";
import Footer from "../components/footer.jsx";
import ProjectCards from "../components/ProjectCards.jsx";


export default function HomePage() {


    return (
        <div className={"h-screen w-screen"}>
            <Navbar/>
            {/*header section goes here*/}
            <section className={"grid grid-cols-1 md:grid-cols-2 my-10 p-8 place-items-center"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className={"font-bold mb-2"}>Hello! I'm Keyur Bilgi</h1>
                <div className="">
                    <h2 className={"text-4xl"}>A Software Developer based in London,
                        <span className={"font-bold"}>United Kingdom</span>
                    </h2>
                    <p className={"my-4"}>Passionate in creating great experience for Digital Product</p>
                    <div className="">
                        <button className={"btn btn-neutral mx-4"}>Talk to me!</button>
                        <button className={"btn btn-neutral btn-outline mx-4"}>See my work</button>
                        {/*social button add later*/}
                    </div>
                </div>
            </section>
            <section className={"grid grid-cols-1 md:grid-cols-2 my-10 p-8 place-items-center"}>
                <div className="">
                    <h2 className={"text-4xl"}>Work Experience</h2>
                    <WorkHistory/>
                </div>
                <div className="">
                    <h2 className={"text-4xl"}>Awards and Recognition</h2>
                    <WorkHistory/>
                </div>
            </section>
            <section
                className={"grid grid-cols-1 md:grid-cols-2 bg-primary text-primary-content mt-10 p-8 place-items-center"}>
                <div className="">
                    <h2 className={"text-4xl"}>Experience with variety of Languages and Frameworks</h2>
                </div>
                <div className="h-60 w-full grid grid-cols-4 grid-rows-2 place-items-center">
                    <h1><RiReactjsFill/></h1>
                    <h1><FaNode/></h1>
                    <h1><FaGitSquare/></h1>
                    <h1><SiTailwindcss/></h1>
                    <h1><SiMongodb/></h1>
                    <h1><SiMysql/></h1>
                    <h1><FaHtml5/></h1>
                    <h1><TbApi/></h1>
                </div>
            </section>
            <section
                className={"mt-10 p-8 place-items-center"}>
                <h2 className={"text-4xl text-center"}>Selected Works</h2>
                <div className="p-4 md:p-14">
                    <ProjectCards/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}