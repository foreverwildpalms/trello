import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledLogo } from "@/components/header/styles";

const Header = () => {
    return (
        <Link to='/'>
            <StyledHeader>
                <StyledLogo>Trello</StyledLogo>
            </StyledHeader>
        </Link>
    )
};

export default Header;