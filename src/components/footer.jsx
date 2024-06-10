import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside className={"flex flex-row space-3"}>
        <a
          href="https://www.linkedin.com/in/keyur-bilgi-07521510b/"
          className={"btn btn-ghost text-xl"}
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/platinumpizza29"
          className={"btn btn-ghost text-xl"}
        >
          <FaFacebookSquare />
        </a>
        <a href="#" className={"btn btn-ghost text-xl"}>
          <VscGithubInverted />
        </a>
      </aside>
    </footer>
  );
}
