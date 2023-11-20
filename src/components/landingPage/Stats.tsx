import StatCard from "./StatCard";
import stats from "./stats.module.scss";
import landingPage from "./landingPage.module.scss";

import { IoGameController } from "react-icons/io5";
import { IoTrophy } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";

type StatsProps = {
    statsRef: React.RefObject<HTMLDivElement>;
}

export default function Stats(props: StatsProps) {
  console.log(props);
  return (
    <div className={stats.statContainer} ref={props.statsRef}>
        <h1 className={landingPage.sectionTitle}>Stats</h1>
        <div className={stats.statCardContainer}>
            <StatCard title="Tournaments Played" amount={[100,3]} icon={IoGameController}/>
            <StatCard title="Tournaments Won" amount={[100,0]} icon={IoTrophy}/>
            <StatCard title="Pricemoney Won" amount={[100,0]} icon={IoWallet} suffix="$"/>
        </div>
    </div>
  )
}
