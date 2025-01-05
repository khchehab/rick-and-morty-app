import { useEffect, useState, ChangeEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import HomepageContent from "./pages/HomepageContent";
import CharacterContent from "./pages/CharacterContent";
import { checkServerStatus, getEndpointCounts } from "./api";
import { lightTheme, darkTheme } from "./themes.ts";

function App() {
    const [darkMode, setDarkMode] = useState<boolean>(function () {
        return JSON.parse(localStorage.getItem("darkMode") || "false");
    });
    const [serverStatus, setServerStatus] = useState<boolean | undefined>(
        undefined,
    );
    const [characterCount, setCharacterCount] = useState<number>(0);
    const [locationCount, setLocationCount] = useState<number>(0);
    const [episodeCount, setEpisodeCount] = useState<number>(0);

    useEffect(function () {
        async function updateState() {
            setServerStatus(await checkServerStatus());

            const counts = await getEndpointCounts();
            setCharacterCount(counts[0]);
            setLocationCount(counts[1]);
            setEpisodeCount(counts[2]);
        }

        updateState();
    }, []);

    // save dark mode in local storage to persist it in other pages
    useEffect(
        function () {
            localStorage.setItem("darkMode", JSON.stringify(darkMode));
        },
        [darkMode],
    );

    function handleDarkModeChange(event: ChangeEvent<HTMLInputElement>) {
        setDarkMode(event.target.checked);
    }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Header
                    darkMode={darkMode}
                    onDarkModeToggle={handleDarkModeChange}
                />
                <Banner />
                <Routes>
                    <Route
                        index
                        element={
                            <HomepageContent characterCount={characterCount} />
                        }
                    />
                    <Route
                        path="/characters"
                        element={<CharacterContent />}
                    />
                </Routes>
                <Footer
                    serverStatus={serverStatus}
                    characterCount={characterCount}
                    locationCount={locationCount}
                    episodeCount={episodeCount}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
