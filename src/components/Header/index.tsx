import { useLocation } from "react-router";
import Link from "@mui/material/Link";
import HomeIcon from "../../assets/home.svg?react";
import "./header.css";

function Header() {
    const location = useLocation();

    const links = [
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/characters",
            label: "Characters",
        },
    ];

    return (
        <header className="header">
            <nav className="nav-bar">
                <a
                    className="logo-link"
                    href="/">
                    <HomeIcon fill="#333333" />
                </a>
                <div className="link-group">
                    {links.map(function (link) {
                        return (
                            <Link
                                key={`link_${link.label}`}
                                href={
                                    location.pathname === link.path
                                        ? "#"
                                        : link.path
                                }
                                underline={
                                    location.pathname === link.path
                                        ? "always"
                                        : "hover"
                                }>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}

export default Header;
