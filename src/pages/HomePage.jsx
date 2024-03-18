import Navbar from "../components/navbar.jsx";
import WorkHistory from "../components/WorkHistory.jsx";


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
                        <button className={"btn btn-neutral mx-4"}>Talk with me!</button>
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
        </div>
    );
}