import {DELETE_BOARD, PUT_BOARD_INTO_COLLECTION} from '@/actions/types';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case PUT_BOARD_INTO_COLLECTION:
            return [...state, action.payload]
        case DELETE_BOARD:
        {
            const newState = state.filter((board) => board.id !== action.payload)
            return [...newState]
        }
        default:
            return [...state]
    }
}