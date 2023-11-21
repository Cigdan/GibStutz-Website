import layout from "./layout.module.scss";
import logo from "../assets/images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { useContext } from "react";
import RefsContext from "../context/RefsContext";
import { scrollToSection } from "../functions/routing";

export default function Header() {
  const { setCurrentSection, refs } = useContext(RefsContext);

  return (
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
          <li className="btn">Route #3</li>
          <li className="btn">Route #4</li>
        </ul>
      </nav>
      <HiMenuAlt3 className={layout.burger} />
    </header>
  );
}
