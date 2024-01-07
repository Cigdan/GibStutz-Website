import { useContext } from "react";
import layout from "./layout.module.scss"
import RefsContext from "../context/RefsContext";
import { scrollToSection } from "../functions/routing";
import logo from "../assets/images/logo.png";

type props = {
  isSidebarOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Sidebar(props : props) {
  const [isSidebarOpen, setIsSidebarOpen] = props.isSidebarOpen;
  function sidebarScroll(target: string) {
    scrollToSection(target, refs, setCurrentSection)
    setIsSidebarOpen(false)
  }
  const { setCurrentSection, refs } = useContext(RefsContext);
  return (
    <div onClick={() => setIsSidebarOpen(false)} className={isSidebarOpen ?  layout.sidebarContainer : ""}>
        <div onClick={(e) => e.stopPropagation()} className={`${layout.sideBar} ${isSidebarOpen ? layout.sidebarOpen : layout.sidebarClosed}`}>
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
                <li onClick={() => sidebarScroll("accomplishments")} >Accomplishments</li>
            </ul>
        </div>
    </div>

  )
}
