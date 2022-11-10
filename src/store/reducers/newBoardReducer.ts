import uniqueId from 'lodash/uniqueId';
import { BoardAction, BoardState, BoardActionTypes } from "@/store/types/newBoard";


const initialState: BoardState = {
    isBoardOpen: false,
    title: '',
    id: '',
    success: false,
}

export default function (state: BoardState = initialState, action: BoardAction): BoardState {
    switch (action.type) {
        case BoardActionTypes.CREATING_BOARD:
            return {
                ...state,
                isBoardOpen: true,
            }
        case BoardActionTypes.CANCEL_CREATING_BOARD:
            return {
                ...state,
                isBoardOpen: false,
            }
        case BoardActionTypes.SUBMIT_BOARD:
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