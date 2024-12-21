import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
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
        <>
            <Header />
            <Content
                characterCount={characterCount}
                locationCount={locationCount}
                episodeCount={episodeCount}
            />
            <Footer
                serverStatus={serverStatus}
                characterCount={characterCount}
                locationCount={locationCount}
                episodeCount={episodeCount}
            />
        </>
    );
}

export default App;
