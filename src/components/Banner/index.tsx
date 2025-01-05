import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerBackground from "../../assets/banner-bg.svg?react";

function Banner() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            position="relative"
            sx={{
                border: "1px dashed green",
                height: "calc(-60px + 50vh)",
            }}>
            <Typography
                variant="h1"
                fontSize="5.625rem"
                fontWeight={900}
                zIndex={2}>
                The Rick and Morty API
            </Typography>
            <Box
                position="absolute"
                width="100%"
                height="100%"
                zIndex={0}>
                <BannerBackground
                    width="100%"
                    height="100%"
                    opacity={0.5}
                />
            </Box>
        </Box>
    );
}

export default Banner;
