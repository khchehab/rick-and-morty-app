export interface Origin {
    name: string;
    url: string;
}

export interface CharacterLocation {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Female" | "Male" | "Genderless" | "unknown";
    origin: Origin;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface SimpleCharacter {
    id: number;
    name: string;
    image: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    lastKnownLocation: {
        name: string;
    };
    episodeNames: {
        name: string;
    }[];
    firstSeenIn: string;
}
