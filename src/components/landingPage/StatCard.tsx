import { useEffect, useState } from "react";
import stats from "./stats.module.scss";

type StatCardProps = {
    title: string;
    amount: number[];
    icon: React.FC;
    suffix?: string;
  }

export default function StatCard(props: StatCardProps) {
    const [totalNumber, setTotalNumber] = useState(props.amount[0]);
    const target = props.amount[1];
    useEffect(() => {
        if (totalNumber > target) {
          const interval = setInterval(() => {
            setTotalNumber(totalNumber - 1);
          }, 50);
          return () => clearInterval(interval);
        }
      }, [totalNumber]);
  return (
    <div>
        <div className={stats.statCard}>
            <props.icon />
            <h1>{props.title}</h1>
            <h2>{totalNumber}{props.suffix}</h2>
        </div>
    </div>
  )
}
