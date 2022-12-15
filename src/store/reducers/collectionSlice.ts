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
        putItemIntoCollection(state, action) {
            state.collection.map((board) => {
                if (board.id === action.payload.boardId) {
                    board.data[action.payload.listId].items = action.payload.items
                }
            })
        },
        deleteBoard(state, action) {
            const newState = state.collection.filter((board) => board.id !== action.payload)
            state.collection = newState;
        }
    }
});

export const {
    putBoardIntoCollection,
    putListIntoCollection,
    putItemIntoCollection,
    deleteBoard
} = collectionSlice.actions;

export default collectionSlice.reducer;