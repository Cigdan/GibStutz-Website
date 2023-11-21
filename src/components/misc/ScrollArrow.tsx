import { IoCaretDownCircleOutline } from "react-icons/io5";
import scrollArrow from "./scrollArrow.module.scss";
import {useContext} from "react";
import RefsContext from "../../context/RefsContext";
import { scrollToSection } from "../../functions/routing";

type ScrollArrowProps = {
  name: string;
};

export default function ScrollArrow(props: ScrollArrowProps) {
  const {setCurrentSection, refs} = useContext(RefsContext);
  return (
    <div className={scrollArrow.arrowContainer}>
      <span className={scrollArrow.link} onClick={() => scrollToSection(props.name, refs, setCurrentSection)}>
        <span className={scrollArrow.text}>{props.name}</span>
        <span>
          <IoCaretDownCircleOutline />
        </span>
      </span>
    </div>
  );
}
