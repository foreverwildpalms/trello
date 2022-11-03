import { PUT_BOARD_INTO_COLLECTION } from '@/actions/types';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case PUT_BOARD_INTO_COLLECTION:
            return [...state, action.payload]
        default:
            return state
    }
}