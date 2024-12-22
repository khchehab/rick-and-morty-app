import Box from "@mui/material/Box";
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
                backgroundColor: "#3c3e44",
                color: "#f5f5f5",
            }}>
            <CardMedia
                image={character.image}
                title={`character_${character.id}`}
                sx={{ width: "33%" }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    textAlign: "justify",
                }}>
                <CardContent>
                    <Typography
                        variant="h5"
                        fontWeight="900">
                        {character.name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            marginBottom: 1,
                        }}>
                        <Circle
                            sx={{
                                color:
                                    character.status === "Alive"
                                        ? "green"
                                        : character.status === "Dead"
                                          ? "red"
                                          : "grey",
                                fontSize: "0.875rem",
                            }}
                        />
                        <Typography variant="body1">
                            {character.status} — {character.species}
                        </Typography>
                    </Box>
                    <Typography
                        variant="body2"
                        sx={{ display: "block" }}
                        color="#9e9e9e">
                        Last known location:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ display: "block" }}
                        fontWeight="500">
                        {character.lastKnownLocation.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ display: "block" }}
                        color="#9e9e9e">
                        First seen in:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ display: "block" }}
                        fontWeight="500">
                        {character.firstSeenIn}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default CharacterCard;
