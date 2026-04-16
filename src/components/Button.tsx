import { type ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
    onClick: ()=>void;
    children: ReactNode;
}
const ButtonBase = styled.button`
    padding: 0.5rem 1rem;
    background-color: hsl(219,79%,66%);
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid hsl(219,79%,56%);

    &:hover {
        cursor:pointer;
        background-color: hsl(219,79%,61%);
        border-color: hsl(219,79%,51%);
    }
    &:active {
        cursor:pointer;
        background-color: hsl(219,79%,56%);
        border-color: hsl(219,79%,46%);
    }
`;
export default function Button({ onClick, children}: ButtonProps) {
    return (
        <ButtonBase onClick={onClick}>{children}</ButtonBase>
    )
}