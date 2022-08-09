import { CharacterResponse } from '../types/character';

export async function getCharacters(page: number, nameFilter: string): Promise<CharacterResponse> {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}`, {
        method: 'get'
    });
    return await response.json() as CharacterResponse;
}
