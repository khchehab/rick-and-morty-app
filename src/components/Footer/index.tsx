import "./footer.css";

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
        <footer className="footer">
            <ul className="stat-list">
                <li className="stat-item">
                    <a
                        title="characters"
                        href="/">
                        <span>Characters: {characterCount}</span>
                    </a>
                </li>
                <li className="stat-item">
                    <a
                        title="locations"
                        href="/">
                        <span>Locations: {locationCount}</span>
                    </a>
                </li>
                <li className="stat-item">
                    <a
                        title="episodes"
                        href="/">
                        <span>Episodes: {episodeCount}</span>
                    </a>
                </li>
            </ul>
            <a
                title="server-status"
                className="server-status"
                href="https://status.rickandmortyapi.com"
                target="_blank">
                <span>server status</span>
                <span
                    className={
                        serverStatus !== undefined
                            ? serverStatus
                                ? "up"
                                : "down"
                            : ""
                    }></span>
            </a>
            <div className="tech-stack">
                <span className="stack-item">
                    Created with React using Vite, inspired by{" "}
                    <a
                        href="https://rickandmortyapi.com/"
                        target="_blank">
                        Rick and Morty API
                    </a>{" "}
                    website
                </span>
                <span className="stack-item">
                    API:{" "}
                    <a
                        href="https://github.com/afuh/rick-and-morty-api"
                        target="_blank">
                        Rick and Morty APIs
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
