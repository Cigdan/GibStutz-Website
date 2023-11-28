import { useState } from "react";
import team from "./team.module.scss"
import TeamCard from "./TeamCard"
import { IoChevronDown , IoChevronUp  } from "react-icons/io5";

export default function Benched() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <span className={team.benchedButton} onClick={() => setIsOpen(!isOpen)}>
            <h2>Benched</h2>
            {isOpen ? <IoChevronUp/> : <IoChevronDown/>}
        </span>
        <div className={`${team.teamCardContainer} ${team.benched} ${isOpen ? team.benchedOpen : team.benchedClosed}`}>
            <TeamCard video="oznr-1-poSU" twitter="MD50215041" name='Beno11'/>
            <TeamCard video="OtoNknfx5c4" twitter="ecogamezzz" name='Eco'/>
            <TeamCard video="oznr-1-poSU" twitter="Teddyy91109468" name='Teddyyberchen'/>
        </div>
    </div>
  )
}
