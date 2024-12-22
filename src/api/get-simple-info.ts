import { SimpleCharacter } from "../types";

interface SimpleCharacterResponse {
    data: {
        charactersByIds: SimpleCharacter[];
    };
}

function randomId(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}

function generateUniqueRandomIds(
    min: number,
    max: number,
    count: number,
): number[] {
    const unique = new Set<number>([]);

    while (unique.size < count) {
        unique.add(randomId(min, max));
    }

    return [...unique];
}

export async function getRandomSimpleCharacters(
    randomCount: number,
    characterCount: number,
): Promise<SimpleCharacter[]> {
    const ids = generateUniqueRandomIds(1, characterCount, randomCount);
    const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                    charactersByIds(ids: [${ids.join(",")}]) {
                        id
                        name
                        image
                        status
                        species
                        lastKnownLocation: location {
                            name
                        }
                        episodeNames: episode {
                            name
                        }
                    }
                }`,
        }),
    });
    const body = (await response.json()) as SimpleCharacterResponse;
    return body.data.charactersByIds.map(function (simple: SimpleCharacter) {
        return {
            id: simple.id,
            name: simple.name,
            image: simple.image,
            status: simple.status,
            species: simple.species,
            lastKnownLocation: {
                name: simple.lastKnownLocation.name,
            },
            firstSeenIn:
                simple.episodeNames[simple.episodeNames.length - 1].name,
        } as SimpleCharacter;
    });
}
