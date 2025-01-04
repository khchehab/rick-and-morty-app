export interface CharacterFilter {
    name: string;
    status: "" | "alive" | "dead" | "unknown";
    gender: "" | "female" | "male" | "genderless" | "unknown";
}
