import React from "react";
import landingPage from "./landingPage.module.scss";
import highlight from "../../assets/videos/highlight.mp4";

export default function Hero() {
  return (
    <>
      <div className={landingPage.heroContainer}>
        <video className={landingPage.heroVideo} autoPlay muted loop>
          <source src={highlight} type="video/mp4" />
          Video couldn't be loaded
        </video>
        <div className={landingPage.heroText}>
          <span>
            <h1 className={landingPage.title}>GIBSTUTZ</h1>
            <h2 className={landingPage.subtitle}>suscht Schliere njeri</h2>
          </span>
        </div>
      </div>
    </>
  );
}
