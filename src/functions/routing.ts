

type ScrollType = {
    name: string,
    ref: React.RefObject<HTMLDivElement>
}


export function scrollTo(name : string, refs : ScrollType[], setCurrentSection : (value: string) => void) {
    setCurrentSection(name);
    const ref = findRef(refs, name);
    if (ref) {
      ref.current?.scrollIntoView();
    }
}

export function findRef(refs : ScrollType[], name : string) {
    const ref = refs.filter((item) => {
        return item.name === name;
    })
    if(ref.length === 0) return null;
    return ref[0].ref
}