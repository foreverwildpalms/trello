import { createSlice } from "@reduxjs/toolkit";
import { CollectionState } from "@/store/types/collectionOfBoards";
import { getData } from "@/utils/dataLocalStorage";

const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collection: getData()?.collection || [] as CollectionState
    },
    reducers: {
        putBoardIntoCollection(state, action) {
            state.collection.push(action.payload);

        },
        putListIntoCollection(state, action) {
            state.collection.map((board) => {
                if (board.id === action.payload.id) {
                    board.data = action.payload.data
                }
            })
        },
        deleteBoard(state, action) {
            const newState = state.collection.filter((board) => board.id !== action.payload)
            state.collection = newState;
        }
    }
});

export const { putBoardIntoCollection, putListIntoCollection, deleteBoard } = collectionSlice.actions;

export default collectionSlice.reducer;