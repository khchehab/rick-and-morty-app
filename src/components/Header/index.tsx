import { ChangeEvent } from "react";
import { useLocation } from "react-router";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "../../assets/home.svg?react";

const links: {
    path: string;
    label: string;
}[] = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/characters",
        label: "Characters",
    },
];

function Header({
    darkMode,
    onDarkModeToggle,
}: {
    darkMode: boolean;
    onDarkModeToggle: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
    const location = useLocation();

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingY={1}
            minHeight="60px"
            sx={{
                border: "1px dashed green",
            }}>
            <Link
                href={location.pathname === "/" ? "#" : "/"}
                underline="none"
                display="flex"
                alignItems="center">
                <HomeIcon />
            </Link>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}>
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
                <FormControlLabel
                    label={<DarkModeIcon fontSize="small" />}
                    control={
                        <Switch
                            checked={darkMode}
                            onChange={onDarkModeToggle}
                        />
                    }
                />
            </Stack>
        </Stack>
    );
}

export default Header;
