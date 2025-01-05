import { ReactNode } from "react";
import { styled, css } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export function StatText({ children }: { children: ReactNode }) {
    return (
        <Typography
            color="primary"
            component="span"
            fontSize="small"
            textTransform="uppercase"
            textAlign="center"
            fontWeight="700">
            {children}
        </Typography>
    );
}

export function TechStackText({ children }: { children: ReactNode }) {
    return (
        <Typography
            color="primary"
            fontSize="medium"
            fontWeight="500">
            {children}
        </Typography>
    );
}

interface ServerStatusIconProps {
    serverStatus?: boolean;
}

export const ServerStatusIcon = styled("span")`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;

    ${({ serverStatus }: ServerStatusIconProps) => {
        if (serverStatus !== undefined) {
            return serverStatus
                ? css`
                      background-color: #55cc44;
                  `
                : css`
                      background-color: #cc4455;
                  `;
        }
    }}
`;
