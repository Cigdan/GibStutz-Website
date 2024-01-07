import landingPage from "../landingPage.module.scss";
import team from "./team.module.scss";

import { useContext } from "react";

import RefsContext from "../../../context/RefsContext";

import TeamCard from "./TeamCard";
import Benched from "./Benched";
import ScrollArrow from "../../misc/ScrollArrow";

export default function Team() {
  const { refs } = useContext(RefsContext);
  return (
    <div className={landingPage.content} ref={refs[2].ref}>
      <h1 className={landingPage.sectionTitle}>Team</h1>
      <div className={team.teamCardContainer}>
        <TeamCard
          twitter="Sensei_Lynxx"
          video="mPy8qeXEARM"
          name="DeathBeforeDisco"
        />
        <TeamCard
          twitter="Cigdan1"
          video="o9koOWFCS2U"
          name="Cigdan"
        />
        <TeamCard
          twitter="Scrylone"
          video="TVbxp60jBa8"
          name="Scrylone"
        />
        <TeamCard
          twitter="rl22basket"
          video="4-NracxXtVE"
          name="Rl22basket"
        />
        <TeamCard
          twitter="GamingStiro"
          video="OtoNknfx5c4"
          name="Stirogaming"
        />
      </div>
      <Benched />
      <ScrollArrow name="accomplishments"/>
    </div>
  );
}
