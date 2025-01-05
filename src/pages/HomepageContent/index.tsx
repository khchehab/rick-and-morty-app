import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import CharacterCard from "../../components/CharacterCard";
import { SimpleCharacter } from "../../types";
import { getRandomSimpleCharacters } from "../../api";

function HomepageContent({ characterCount }: { characterCount: number }) {
    const [characters, setCharacters] = useState<SimpleCharacter[]>([]);

    useEffect(
        function () {
            async function fetchCharacters() {
                if (characterCount > 0) {
                    const randomCharacters = await getRandomSimpleCharacters(
                        9,
                        characterCount,
                    );
                    setCharacters(randomCharacters);
                }
            }

            fetchCharacters();
        },
        [characterCount],
    );

    return (
        <>
            {characters.length === 0 && (
                <CircularProgress
                    color="primary.progress"
                    sx={{ marginTop: "10px" }}
                />
            )}
            {characters.length > 0 && (
                <Grid
                    container
                    spacing={2}>
                    <Grid size={4}>
                        {characters.slice(0, 3).map(function (
                            character: SimpleCharacter,
                        ) {
                            return (
                                <CharacterCard
                                    key={`character_${character.id}`}
                                    character={character}
                                />
                            );
                        })}
                    </Grid>
                    <Grid size={4}>
                        {characters.slice(3, 6).map(function (
                            character: SimpleCharacter,
                        ) {
                            return (
                                <CharacterCard
                                    key={`character_${character.id}`}
                                    character={character}
                                />
                            );
                        })}
                    </Grid>
                    <Grid size={4}>
                        {characters.slice(6, 9).map(function (
                            character: SimpleCharacter,
                        ) {
                            return (
                                <CharacterCard
                                    key={`character_${character.id}`}
                                    character={character}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
            )}
        </>
    );
}

export default HomepageContent;
