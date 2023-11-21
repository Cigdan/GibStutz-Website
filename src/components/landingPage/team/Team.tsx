import landingPage from '../landingPage.module.scss'
import team from './team.module.scss'

import { useContext } from 'react'

import RefsContext from '../../../context/RefsContext'

import TeamCard from './TeamCard'

export default function Team() {
  const {refs} = useContext(RefsContext);
  return (
    <div className={landingPage.content} ref={refs[2].ref}>
        <h1 className={landingPage.sectionTitle}>Team</h1>
        <div className={team.teamCardContainer}>
            <TeamCard name='DeathBeforeDisco'/>
            <TeamCard name='Cigdan'/>
            <TeamCard name='Scrylone'/>
            <TeamCard name='Rl22basket'/>
            <TeamCard name='Stirogaming'/>
        </div>
    </div>
  )
}
