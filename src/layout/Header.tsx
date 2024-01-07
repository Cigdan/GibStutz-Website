import layout from "./layout.module.scss";
import logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { useContext } from "react";
import RefsContext from "../context/RefsContext";
import { scrollToSection } from "../functions/routing";

type props = {
  isSidebarOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Header(props: props) {
  const { setCurrentSection, refs } = useContext(RefsContext);

  const [isSidebarOpen, setIsSidebarOpen] = props.isSidebarOpen;
  return (
    <>
    <header className={layout.header}>
      <div>
        <img
          onClick={() => scrollToSection("home", refs, setCurrentSection)}
          src={logo}
          width="60px"
          height="60px"
          alt="GibStutz Logo"
        />
      </div>
      <nav>
        <ul className={layout.nav}>
          <li
            onClick={() => scrollToSection("home", refs, setCurrentSection)}
            className="btn"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("stats", refs, setCurrentSection)}
            className="btn"
          >
            Stats
          </li>
          <li
            onClick={() => scrollToSection("team", refs, setCurrentSection)}
            className="btn"
          >
            Team
          </li>
          <li
            onClick={() => scrollToSection("accomplishments", refs, setCurrentSection)}
            className="btn"
          >
            Accomplishments
          </li>
        </ul>
      </nav>
      <HiMenuAlt3 onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={layout.burger} />
    </header>
    </>
  );
}
