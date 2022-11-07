import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  width: 100%;
  padding: 20px 15px;
  margin-bottom: 30px;
`;

const StyledLogo = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 300;
  font-size: 80px;
  color: #ead7d7;
  text-align: center;
`;

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