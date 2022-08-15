import { ChangeEvent, MouseEvent } from 'react';

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

export interface CharacterContextType {
    characters: CharacterType[];
    setCharacters: (characters: CharacterType[]) => void;

    detailOpen: boolean;
    openDetailModalHandler: (e: MouseEvent<HTMLElement>) => void;
    closeDetailModalHandler: (e: object, reason: string) => void;

    page: number;
    totalPages: number;

    setPage: (page: number) => void;
    setTotalPages: (totalPages: number) => void;

    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    expanded: string;

    setName: (name: string) => void;
    setStatus: (status: string) => void;
    setSpecies: (species: string) => void;
    setType: (type: string) => void;
    setGender: (gender: string) => void;
    setExpanded: (expanded: string) => void;

    clearFilter: () => void;
    nameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pageChange: (e: ChangeEvent<unknown>, page: number) => void;
}

export const StatusOptions: string[] = [
    'alive', 'dead', 'unknown'
];

export const GenderOptions: string[] = [
    'male', 'female', 'genderless', 'unknown'
];

export const SpeciesOptions: string[] = [
    'human', 'alien', 'humanoid', 'unknown', 'poopybutthole', 'mythological creature', 'animal', 'robot', 'cronenberg', 'disease'
];
