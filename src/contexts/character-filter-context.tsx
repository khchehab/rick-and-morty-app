import { useState, createContext, ReactNode, ChangeEvent } from 'react';
import { CharacterFilterContextType } from '../types/character';

const CharacterFilterContext = createContext<CharacterFilterContextType>({
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
    setGender: (gender: 'male' | 'female' | 'genderless' | 'unknown' | '') => undefined,
    setExpanded: (expanded: string) => undefined,

    clearFilter: () => undefined,
    nameChange: (e: ChangeEvent<HTMLInputElement>) => undefined,
    pageChange: (e: ChangeEvent<unknown>, page: number) => undefined
});

export function CharacterFilterProvider({ children }: { children: ReactNode }) {
    const [ page, setPage ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number>(1);

    const [ name, setName ] = useState<string>('');
    const [ status, setStatus ] = useState<string>('');
    const [ species, setSpecies ] = useState<string>('');
    const [ type, setType ] = useState<string>('');
    const [ gender, setGender ] = useState<'male' | 'female' | 'genderless' | 'unknown' | ''>('');
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

    return (<CharacterFilterContext.Provider value={{
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
    </CharacterFilterContext.Provider>);
}

export default CharacterFilterContext;
