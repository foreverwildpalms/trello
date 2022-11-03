import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import BoardContainer from "@/components/boards/BoardContainer";
import ShowActiveBoard from "@/components/boards/ShowActiveBoard";

const StyledApp = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  font-family: HelveticaNeue, sans-serif;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1096px;
`;

const App = () => {
    return (
        <StyledApp>
            <StyledContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<BoardContainer />} />
                    <Route path="/b" element={<ShowActiveBoard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </StyledContainer>
        </StyledApp>
    )
};

export default App;