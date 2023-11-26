import Hero from "./Hero";
import Stats from "./stats/Stats";
import Team from "./team/Team";
import landingPage from "./landingPage.module.scss";

import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { scrollToSection } from "../../functions/routing";

import RefsContext from "../../context/RefsContext";

export default function LandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {setCurrentSection, currentSection, refs } = useContext(RefsContext);
  useEffect(() => {
    if (searchParams.get("section")) {
      setCurrentSection(searchParams.get("section") as string);
      scrollToSection(searchParams.get("section") as string, refs, setCurrentSection);
    }
  }, []);
  useEffect(() => {
    if (currentSection !== null) {
      searchParams.set("section", currentSection);
      setSearchParams(searchParams);
    }
  }, [currentSection]);
  return (
    <>
      <Hero />
      <span className={landingPage.mainContent}>
      <Stats />
      <Team />
      </span>
    </>
  );
}
