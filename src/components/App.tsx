import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "@/components/header";
import NotFound from "@/components/NotFound";
import Boards from "@/components/boards";
import ActiveBoard from "@/components/activeBoard";
import { throttle } from "lodash";
import { setData } from "@/utils/localStorage/dataLocalStorage";
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
}, 700));

const App = () => {
    return (
        <StyledApp>
            <StyledContainer>
                <Header />
                <Routes>
                    <Route path="/" element={<Boards />} />
                    <Route path=":id" element={<ActiveBoard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </StyledContainer>
        </StyledApp>
    )
};

export default App;