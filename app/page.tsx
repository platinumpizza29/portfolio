import { HeroHighlight, Highlight } from "./components/custom/hero-highlight";
import { ExpandableCardDemo } from "./components/expandableCard";
import Footer from "./components/footer";
import { NavbarDemo } from "./components/navbarComp";
import { TimelineDemo } from "./components/Work";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <NavbarDemo />
      <HeroHighlight>
        <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          I&apos;m a software engineer that
          <br /> Turns ideas into interfaces, and interfaces into
          <br />
          <Highlight className="text-black dark:text-white">impact.</Highlight>
        </h1>
      </HeroHighlight>
      <TimelineDemo />

      {/* <ProjectsComp /> */}
      <ExpandableCardDemo />
      {/* <h1>Education</h1> */}
      <Footer />
    </main>
  );
}
