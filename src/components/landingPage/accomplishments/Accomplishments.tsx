import { useContext } from 'react'
import landingPage from "../landingPage.module.scss";
import accomplishments from "./accomplishments.module.scss";
import RefsContext from "../../../context/RefsContext";

import Year from "./Year";

type accomplishmentsType = {
    [year: string]: {
        title: string;
        image: string;
        url: string;
    }[]
}

const accomplishmentsData : accomplishmentsType = {
    "2021": [
        {
            title: "Beat Babos Gaming in Community Voting",
            image: "Babos Gaming Logo",
            url: "https://www.digitec.ch/de/page/age-of-empires-iv-session-und-community-voting-preis-jetzt-anmelden-und-abstimmen-21897"
        },
        {
            title: "Qualified for SEL Spring Series Challenger Division",
            image: "Swiss Esports League Logo",
            url: "https://twitter.com/esportsleaguech/status/1508471265279062020"
        }
    ],
    "2022": [
    ],
    "2023": [
    ],
    "2024": [
    ]
}

export default function Accomplishments() {
    const { refs } = useContext(RefsContext);
    return (
      <div className={landingPage.content} ref={refs[3].ref}>
          <h1 className={landingPage.sectionTitle}>Accomplishments</h1>
          <div className={accomplishments.accomplishmentsContainer}>
              {
              Object.keys(accomplishmentsData).map((year: string, index: number) => {
                  return <Year key={index} year={year} accomplishments={accomplishmentsData[year]} />
              })
              }
          </div>
      </div>
    )
  }