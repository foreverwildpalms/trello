import { createSlice } from "@reduxjs/toolkit";
import uniqueId from 'lodash/uniqueId';
import { NewBoardState } from '../types/newBoard';

const newBoardSlice = createSlice({
    name: 'newBoard',
    initialState: {
        newBoard: {} as NewBoardState
    },
    reducers: {
        creatingBoard(state) {
            state.newBoard.isBoardOpen = true;
        },
        cancelCreatingBoard(state) {
            state.newBoard.isBoardOpen = false;
        },
        submitBoard(state, action) {
            state.newBoard.isBoardOpen = false;
            state.newBoard.title = action.payload;
            state.newBoard.id = `${uniqueId('')}` + Math.floor(Math.random() * (100));
        }
    },
});

export const { creatingBoard, cancelCreatingBoard, submitBoard } = newBoardSlice.actions;

export default newBoardSlice.reducer;