import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Circle from "@mui/icons-material/Circle";
import { SimpleCharacter } from "../../types";

function CharacterCard({ character }: { character: SimpleCharacter }) {
    return (
        <Card
            sx={{
                display: "flex",
                width: "100%",
                height: "200px",
                marginY: "16px",
            }}>
            <CardMedia
                image={character.image}
                title={`character_${character.id}`}
                sx={{ width: "33%" }}
            />
            <Stack textAlign="justify">
                <CardContent>
                    <Typography
                        variant="h5"
                        fontWeight="900">
                        {character.name}
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={1}
                        marginBottom={1}>
                        <Circle
                            fontSize="0.875rem"
                            sx={{
                                color:
                                    character.status === "Alive"
                                        ? "green"
                                        : character.status === "Dead"
                                          ? "red"
                                          : "grey",
                            }}
                        />
                        <Typography variant="body1">
                            {character.status} — {character.species}
                        </Typography>
                    </Stack>
                    <Typography variant="body2">
                        Last known location:
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight="500">
                        {character.lastKnownLocation.name}
                    </Typography>
                    <Typography variant="body2">First seen in:</Typography>
                    <Typography
                        variant="body1"
                        fontWeight="500">
                        {character.firstSeenIn}
                    </Typography>
                </CardContent>
            </Stack>
        </Card>
    );
}

export default CharacterCard;
