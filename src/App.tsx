import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import HomepageContent from "./components/HomepageContent";
import CharacterContent from "./components/CharacterContent";
import { checkServerStatus, getEndpointCounts } from "./api";

function App() {
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

    return (
        <BrowserRouter>
            <Header />
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
    );
}

export default App;
