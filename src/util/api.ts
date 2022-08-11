import { CharacterResponse } from '../types/character';

let abortController: AbortController | undefined = undefined;

export async function getCharacters(
    page: number,
    nameFilter: string, statusFilter: string, speciesFilter: string, typeFilter: string, genderFilter: string
): Promise<CharacterResponse> {
    if (abortController) {
        abortController.abort();
    }

    abortController = new AbortController();
    const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${nameFilter}&status=${statusFilter}&species=${speciesFilter}&type=${typeFilter}&gender=${genderFilter}`,
        {
            method: 'get',
            signal: abortController.signal
        });
    return await response.json() as Promise<CharacterResponse>;
}
