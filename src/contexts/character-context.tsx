import { useState, createContext, ReactNode, ChangeEvent, MouseEvent } from 'react';
import { CharacterContextType, CharacterType } from '../types/character';

const CharacterContext = createContext<CharacterContextType>({
    characters: [],
    setCharacters: (characters: CharacterType[]) => undefined,

    detailOpen: false,
    openDetailModalHandler: (e: MouseEvent<HTMLElement>) => undefined,
    closeDetailModalHandler: (e: object, reason: string) => undefined,

    page: 1,
    totalPages: 1,

    setPage: (page: number) => undefined,
    setTotalPages: (totalPages: number) => undefined,

    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    expanded: '',

    setName: (name: string) => undefined,
    setStatus: (status: string) => undefined,
    setSpecies: (species: string) => undefined,
    setType: (type: string) => undefined,
    setGender: (gender: string) => undefined,
    setExpanded: (expanded: string) => undefined,

    clearFilter: () => undefined,
    nameChange: (e: ChangeEvent<HTMLInputElement>) => undefined,
    pageChange: (e: ChangeEvent<unknown>, page: number) => undefined
});

export function CharacterProvider({ children }: { children: ReactNode }) {
    const [ characters, setCharacters ] = useState<CharacterType[]>([]);
    const [ detailOpen, setDetailOpen ] = useState<boolean>(false);

    const [ page, setPage ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number>(1);

    const [ name, setName ] = useState<string>('');
    const [ status, setStatus ] = useState<string>('');
    const [ species, setSpecies ] = useState<string>('');
    const [ type, setType ] = useState<string>('');
    const [ gender, setGender ] = useState<string>('');
    const [ expanded, setExpanded ] = useState<string>('');

    function clearFilter() {
        setStatus('');
        setSpecies('');
        setType('');
        setGender('');
    }

    function nameChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
        setPage(1);
    }

    function pageChange(e: ChangeEvent<unknown>, page: number) {
        setPage(page);
    }

    return (<CharacterContext.Provider value={{
        characters,
        setCharacters,

        detailOpen,
        openDetailModalHandler: (e: MouseEvent<HTMLElement>) => setDetailOpen(true),
        closeDetailModalHandler: (e: object, reason: string) => setDetailOpen(false),

        page,
        totalPages,

        setPage,
        setTotalPages,

        name,
        status,
        species,
        type,
        gender,
        expanded,

        setName,
        setStatus,
        setSpecies,
        setType,
        setGender,
        setExpanded,

        clearFilter,
        nameChange,
        pageChange
    }}>
        {children}
    </CharacterContext.Provider>);
}

export default CharacterContext;
