import { createSlice } from "@reduxjs/toolkit";
import { ActiveBoard } from "@/store/types/boardData";

const activeBoardSlice = createSlice({
    name: 'activeBoard',
    initialState: {
        activeBoard: {} as ActiveBoard
    },
    reducers: {
        selectActiveBoard(state, action) {
            state.activeBoard.title = action.payload.title;
            state.activeBoard.id =  action.payload.id;
            state.activeBoard.isFetching = true;
        },
        selectActiveBoardSuccess(state) {
            state.activeBoard.isFetching = false;
        },
        enableListEditMode(state) {
            state.activeBoard.isEditingList = true;
        },
        disableListEditMode(state) {
            state.activeBoard.isEditingList = false
        }
    }
})

export const {
    selectActiveBoard,
    selectActiveBoardSuccess,
    enableListEditMode,
    disableListEditMode
} = activeBoardSlice.actions;

export default activeBoardSlice.reducer;