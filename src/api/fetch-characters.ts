import { PaginatedResponse, Character, CharacterFilter } from "../types";

interface CharacterResponse {
    data: {
        characters: PaginatedResponse<Character>;
    };
}

export async function fetchCharacters(
    page: number,
    filter: CharacterFilter,
): Promise<PaginatedResponse<Character>> {
    const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                    characters(page: ${page}, filter: {
                        name: "${filter.name}",
                        status: "${filter.status}",
                        gender: "${filter.gender}"
                    }) {
                        info {
                            count
                            pages
                            next
                            prev
                        }
                        results {
                            id
                            name
                            status
                            species
                            type
                            gender
                            image
                            origin {
                                name
                            }
                            location {
                                name
                            }
                        }
                    }
                }`,
        }),
    });
    const body = (await response.json()) as CharacterResponse;
    return body.data.characters;
}
