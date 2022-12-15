import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import Boards from "@/components/boards/Boards";
import ShowActiveBoard from "@/components/boards/activeBoard/ShowActiveBoard";
import { throttle } from "lodash";
import { setData } from "@/utils/dataLocalStorage";
import store from "@/store";

const StyledApp = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1096px;
`;

store.subscribe(throttle(() => {
    setData({
        collection: store.getState().collection.collection,
        activeBoard: store.getState().activeBoard.activeBoard,
        newBoard: store.getState().newBoard.newBoard,
        activeBoardData: store.getState().activeBoardData.listItems,
    })
}, 1000));

const App = () => {
    return (
        <StyledApp>
            <StyledContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Boards />} />
                    <Route path="/b/:id" element={<ShowActiveBoard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </StyledContainer>
        </StyledApp>
    )
};

export default App;