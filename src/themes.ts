import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#202329",
            headerBackground: "#f5f5f5",
            bannerBackground: "#f5f5f5",
            bannerText: "#202329",
            bannerColor: "#e0e0e0",
            logo: "#333333",
            footerBackground: "#f5f5f5",
        },
        background: {
            default: "#ffffff",
            paper: "#f2f2f2",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f5f5f5",
            headerBackground: "#2c2c2c",
            bannerBackground: "#333333",
            bannerText: "#f5f5f5",
            bannerColor: "#4f4f4f",
            logo: "#f5f5f5",
            footerBackground: "#2c2c2c",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
    },
});
