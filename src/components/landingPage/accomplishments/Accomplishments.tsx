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
        title: "6th Place at the Digitec Playground vol.12 Grümpi"
        image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/digitec-logo-freelogovectors.net_-400x341.png"
        url: "https://www.faceit.com/en/championship/792bc22d-a55a-41cd-b9d7-6aeeda540305/digitec%20Playground%20Vol%2012%20-%20Counter-Strike%202%20-%20Grumpi/standings/leaderboard"
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
