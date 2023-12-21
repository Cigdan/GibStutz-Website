import { useContext } from "react";
import layout from "./layout.module.scss"
import RefsContext from "../context/RefsContext";
import { scrollToSection } from "../functions/routing";
import logo from "../assets/images/logo.png";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebaropen: (isSidebarOpen: boolean) => void;
}

export default function Sidebar(props : SidebarProps) {
  function sidebarScroll(target: string) {
    scrollToSection(target, refs, setCurrentSection)
    props.setIsSidebaropen(false)
  }
  const { setCurrentSection, refs } = useContext(RefsContext);
  return (
    <div onClick={() => props.setIsSidebaropen(false)} className={props.isSidebarOpen ?  layout.sidebarContainer : ""}>
        <div onClick={(e) => e.stopPropagation()} className={`${layout.sideBar} ${props.isSidebarOpen ? layout.sidebarOpen : layout.sidebarClosed}`}>
        <img
          onClick={() => scrollToSection("home", refs, setCurrentSection)}
          src={logo}
          width="100px"
          height="100px"
          alt="GibStutz Logo"
        />
        <hr className={layout.divider} />
            <ul className={layout.sidebarNav}>
                <li onClick={() => sidebarScroll("home")}>Home</li>
                <li onClick={() => sidebarScroll("stats")}>Stats</li>
                <li onClick={() => sidebarScroll("team")} >Team</li>
                <li onClick={() => sidebarScroll("home")} >Route #4</li>
            </ul>
        </div>
    </div>

  )
}
