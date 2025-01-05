import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { StatText, ServerStatusIcon, TechStackText } from "./helpers.tsx";

function Footer({
    characterCount,
    locationCount,
    episodeCount,
    serverStatus,
}: {
    characterCount: number;
    locationCount: number;
    episodeCount: number;
    serverStatus: boolean | undefined;
}) {
    return (
        <Stack
            spacing={3}
            alignItems="center"
            paddingY={8}
            sx={{
                border: "1px dashed green",
            }}>
            <Stack spacing={1}>
                <Stack
                    direction="row"
                    spacing={2}>
                    <StatText>characters: {characterCount}</StatText>
                    <StatText>locations: {locationCount}</StatText>
                    <StatText>episodes: {episodeCount}</StatText>
                </Stack>
                <Link
                    title="server status"
                    href="https://status.rickandmortyapi.com"
                    target="_blank"
                    underline="none"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={0.5}>
                    <StatText>server status</StatText>
                    <ServerStatusIcon serverStatus={serverStatus} />
                </Link>
            </Stack>
            <Stack spacing={1}>
                <TechStackText>
                    Create with React using Vite, inspired by &nbsp;
                    <Link
                        href="https://rickandmortyapi.com/"
                        target="_blank">
                        Rick and Morty API
                    </Link>
                    &nbsp; website
                </TechStackText>
                <TechStackText>
                    API: &nbsp;
                    <Link
                        href="https://github.com/afuh/rick-and-morty-api"
                        target="_blank">
                        Rick and Morty APIs
                    </Link>
                </TechStackText>
            </Stack>
        </Stack>
    );
}

export default Footer;
