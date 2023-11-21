import Hero from "./Hero";
import Stats from "./Stats";
import RefsContext from "../../context/RefsContext";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { scrollToSection } from "../../functions/routing";

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
      console.log(currentSection)
      searchParams.set("section", currentSection);
      setSearchParams(searchParams);
    }
  }, [currentSection]);
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
}
