import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Banner from "../Banner";
import CharacterCard from "../CharacterCard";
import { SimpleCharacter } from "../../types";
import { getRandomSimpleCharacters } from "../../api";

function Content({ characterCount }: { characterCount: number }) {
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
        <main>
            <Banner />
            {characters.length === 0 && (
                <CircularProgress sx={{ marginTop: "10px" }} />
            )}
            {characters.length > 0 && (
                <Grid
                    container
                    spacing={2}
                    paddingTop={2}
                    paddingX={2}>
                    <Grid size={4}>
                        {characters.slice(0, 3).map(function (
                            character: SimpleCharacter,
                        ) {
                            return <CharacterCard character={character} />;
                        })}
                    </Grid>
                    <Grid size={4}>
                        {characters.slice(3, 6).map(function (
                            character: SimpleCharacter,
                        ) {
                            return <CharacterCard character={character} />;
                        })}
                    </Grid>
                    <Grid size={4}>
                        {characters.slice(6, 9).map(function (
                            character: SimpleCharacter,
                        ) {
                            return <CharacterCard character={character} />;
                        })}
                    </Grid>
                </Grid>
            )}
        </main>
    );
}

export default Content;
