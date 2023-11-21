import { IoCaretDownCircleOutline } from "react-icons/io5";
import scrollArrow from "./scrollArrow.module.scss";
import {useContext} from "react";
import RefsContext from "../../context/RefsContext";
import { scrollTo } from "../../functions/routing";

type ScrollArrowProps = {
  name: string;
};

export default function ScrollArrow(props: ScrollArrowProps) {
  const {setCurrentSection, refs} = useContext(RefsContext);
  return (
    <div className={scrollArrow.arrowContainer}>
      <span className={scrollArrow.link} onClick={() => scrollTo(props.name, refs, setCurrentSection)}>
        <span>Stats</span>
        <span>
          <IoCaretDownCircleOutline />
        </span>
      </span>
    </div>
  );
}
