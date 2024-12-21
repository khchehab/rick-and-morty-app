import HomeIcon from "../../assets/home.svg?react";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <a
                    className="logo-link"
                    href="/">
                    <HomeIcon fill="#333333" />
                </a>
            </nav>
        </header>
    );
}

export default Header;
