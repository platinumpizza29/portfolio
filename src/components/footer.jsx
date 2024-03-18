import {FaFacebookSquare, FaLinkedinIn} from "react-icons/fa";
import {VscGithubInverted} from "react-icons/vsc";

export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside className={"flex flex-row space-x-3"}>
                <h2 className={"text-xl"}><FaLinkedinIn/></h2>
                <h2 className={"text-xl"}><FaFacebookSquare/></h2>
                <h2 className={"text-xl"}><VscGithubInverted/></h2>
            </aside>
        </footer>
    );
}