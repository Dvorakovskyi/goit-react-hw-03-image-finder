import React from "react";
import { StyledBtn } from "./Button.styled";
const LoadMoreBtn = ({onClick}) => {
    return (
        <StyledBtn type="button" onClick={onClick}>Load more</StyledBtn>
    )
};

export default LoadMoreBtn;