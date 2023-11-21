import Hero from "./Hero";
import Stats from "./Stats";
import RefsContext from "../../context/RefsContext";
import { useSearchParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";

export default function LandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {setCurrentSection, currentSection } = useContext(RefsContext);
  useEffect(() => {
    if (searchParams.get("section")) {
      setCurrentSection(searchParams.get("section") as string);
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
      <Stats />
    </>
  );
}
