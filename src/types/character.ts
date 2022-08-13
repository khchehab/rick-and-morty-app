import { ChangeEvent } from 'react';
import { Option } from './index';

export interface CharacterType {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    },
    results: CharacterType[];
}

export interface CharacterFilterContextType {
    page: number;
    totalPages: number;

    setPage: (page: number) => void;
    setTotalPages: (totalPages: number) => void;

    name: string;
    status: string;
    species: string;
    type: string;
    gender: 'male' | 'female' | 'genderless' | 'unknown' | '';
    expanded: string;

    setName: (name: string) => void;
    setStatus: (status: string) => void;
    setSpecies: (species: string) => void;
    setType: (type: string) => void;
    setGender: (gender: 'male' | 'female' | 'genderless' | 'unknown' | '') => void;
    setExpanded: (expanded: string) => void;

    clearFilter: () => void;
    nameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pageChange: (e: ChangeEvent<unknown>, page: number) => void;
}

export const StatusOptions: Option[] = [ {
    value: 'alive',
    display: 'Alive'
}, {
    value: 'dead',
    display: 'Dead'
}, {
    value: 'unknown',
    display: 'Unknown'
} ];
