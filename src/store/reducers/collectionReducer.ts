import {BoardAction, CollectionActionTypes, CollectionState} from "@/store/types/collectionOfBoards";

const initialState = [];

export default function (state: CollectionState = initialState, action: BoardAction): CollectionState {
    switch (action.type) {
        case CollectionActionTypes.PUT_BOARD_INTO_COLLECTION:
            return [...state, action.payload]

        case CollectionActionTypes.DELETE_BOARD:
        {
            const newState = state.filter((board) => board.id !== action.payload)
            return [...newState]
        }

        default:
            return [...state]
    }
}