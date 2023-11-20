import { IoCaretDownCircleOutline } from "react-icons/io5";
import scrollArrow from "./scrollArrow.module.scss";

type ScrollArrowProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
  name: string;
};

export default function ScrollArrow(props: ScrollArrowProps) {
  const scrollRef = props.scrollRef;
  const executeScroll = () => {
    if (props.scrollRef) {
      scrollRef.current?.scrollIntoView();
    }
  };
  return (
    <div className={scrollArrow.arrowContainer}>
      <span className={scrollArrow.link} onClick={() => executeScroll()}>
        <span>Stats</span>
        <span>
          <IoCaretDownCircleOutline />
        </span>
      </span>
    </div>
  );
}
