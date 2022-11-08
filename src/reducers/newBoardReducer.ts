import { CANCEL_CREATING_BOARD, CREATING_BOARD, SUBMIT_BOARD } from "@/actions/types";
import uniqueId from 'lodash/uniqueId';

const initialState = {
    isBoardOpen: false,
    title: null,
    id: null,
    success: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATING_BOARD:
            return {
                ...state,
                isBoardOpen: true,
            }
        case CANCEL_CREATING_BOARD:
            return {
                ...state,
                isBoardOpen: false,
            }
        case SUBMIT_BOARD:
            return {
                ...state,
                isBoardOpen: false,
                title: action.payload,
                id: `${uniqueId('')}` + Math.floor(Math.random() * (100)), // имитация оригиналного id
            }
        default:
            return state
    }
}