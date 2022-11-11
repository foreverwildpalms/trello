import uniqueId from 'lodash/uniqueId';
import { BoardAction, NewBoardState, BoardActionTypes } from "@/store/types/newBoard";


const initialState: NewBoardState = {
    isBoardOpen: false,
    title: '',
    id: '',
    success: false,
}

export default function (state: NewBoardState = initialState, action: BoardAction): NewBoardState {
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