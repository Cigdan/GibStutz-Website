import { createContext, RefObject } from 'react';

type RefsType = {
    name: string,
    ref: RefObject<HTMLDivElement>

}
type RefsContextType = {
    refs: RefsType[],
    currentSection : string | null,
    setCurrentSection : (value: string) => void
}

const RefsContext = createContext<RefsContextType>({
    refs : [],
    currentSection : null,
    setCurrentSection: (value) => {value}
})


export default RefsContext;