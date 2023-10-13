import landingPage from "./landingPage.module.scss";

export default function Hero() {
  return (
    <>
      <div className={landingPage.heroContainer}>
        <video className={landingPage.heroVideo} autoPlay muted loop>
          <source src="https://res.cloudinary.com/dvvmyybrf/video/upload/f_auto:video,q_auto:eco/zdqa9eety3917xwzbwrh#10" type="video/mp4"  />
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
