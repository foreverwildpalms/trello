import React from 'react';
import styled from 'styled-components';

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
        <StyledHeader>
            <StyledLogo>Trello</StyledLogo>
        </StyledHeader>
    )
};

export default Header;