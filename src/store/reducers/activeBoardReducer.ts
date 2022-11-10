import {ActiveBoard, ActiveBoardAction, ActiveBoardTypes} from "@/store/types/boardData";

const initialState = {
    title: '',
    id: '',
    isFetching: false,
    isEditingList: false,
}

export default function activeBoardReducer(state: ActiveBoard = initialState, action: ActiveBoardAction): ActiveBoard {
    switch (action.type) {
        case ActiveBoardTypes.SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title: action.payload.title,
                id:  action.payload.id,
                isFetching: true
            }

        case ActiveBoardTypes.SELECT_ACTIVE_BOARD_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case ActiveBoardTypes.ENABLE_LIST_EDIT_MODE:
            return {
                ...state,
                isEditingList: true
            }

        case ActiveBoardTypes.DISABLE_LIST_EDIT_MODE:
            return {
                ...state,
                isEditingList: false
            }

        default:
            return state
    }
}

