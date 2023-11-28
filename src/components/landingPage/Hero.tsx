import ScrollArrow from "../misc/ScrollArrow";
import landingPage from "./landingPage.module.scss";
import RefsContext from "../../context/RefsContext";
import { useContext } from "react";

export default function Hero() {
  const {refs} = useContext(RefsContext);
  return (
    <>
      <div className={landingPage.heroContainer} ref={refs[0].ref}>
        <video className={landingPage.heroVideo} autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/dvvmyybrf/video/upload/f_auto:video,q_auto/zdqa9eety3917xwzbwrh#10"
            type="video/mp4"
          />
          Video couldnt be loaded
        </video>
        <div className={landingPage.heroText}>
          <span>
            <h1 className={landingPage.title}>GIBSTUTZ</h1>
            <h2 className={landingPage.subtitle}>suscht Schliere njeri</h2>
          </span>
        </div>
        <ScrollArrow name="stats"/>
      </div>
    </>
  );
}
