import { Character, Episode, PaginatedResponse } from "../types";

// Using REST APIs, we get the count for each endpoint alone.

export async function getCharacterCount(): Promise<number> {
    const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=1",
    );
    const body = (await response.json()) as PaginatedResponse<Character>;
    return body.info.count;
}

export async function getLocationCount(): Promise<number> {
    const response = await fetch(
        "https://rickandmortyapi.com/api/location?page=1",
    );
    const body = (await response.json()) as PaginatedResponse<Location>;
    return body.info.count;
}

export async function getEpisodeCount(): Promise<number> {
    const response = await fetch(
        "https://rickandmortyapi.com/api/episode?page=1",
    );
    const body = (await response.json()) as PaginatedResponse<Episode>;
    return body.info.count;
}

// Using GraphQL, we can get the count of all three endpoint in one API call.

interface EndpointCount {
    data: {
        characters: {
            info: {
                count: number;
            };
        };
        locations: {
            info: {
                count: number;
            };
        };
        episodes: {
            info: {
                count: number;
            };
        };
    };
}

export async function getEndpointCounts(): Promise<number[]> {
    const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                    characters(page: 1) {
                        info {
                            count
                        }
                    }
                    locations(page: 1) {
                        info {
                            count
                        }
                    }
                    episodes(page: 1) {
                        info {
                            count
                        }
                    }
                }
            `,
        }),
    });
    const body = (await response.json()) as EndpointCount;
    return [
        body.data.characters.info.count,
        body.data.locations.info.count,
        body.data.episodes.info.count,
    ];
}
