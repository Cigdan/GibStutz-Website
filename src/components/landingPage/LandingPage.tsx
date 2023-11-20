import { useRef } from 'react'
import Hero from './Hero'
import Stats from './Stats'

export default function LandingPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  return (
    <>
        <Hero statsRef={statsRef}/>
        <Stats statsRef={statsRef} />
    </>
  )
}
