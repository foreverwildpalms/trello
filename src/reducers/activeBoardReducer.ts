import {
    SELECT_ACTIVE_BOARD,
    SELECT_ACTIVE_BOARD_SUCCESS,
    ENABLE_LIST_EDIT_MODE,
    DISABLE_LIST_EDIT_MODE
} from '@/actions/types';

const initialState = {
    title: '',
    id: '',
    isFetching: false,
    isEditingList: false,
}

export default function activeBoardReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_ACTIVE_BOARD:
            return {
                ...state,
                title: action.payload.title,
                id:  action.payload.id,
                isFetching: true
            }

        case SELECT_ACTIVE_BOARD_SUCCESS:
            return {
                ...state,
                isFetching: false
            }

        case ENABLE_LIST_EDIT_MODE:
            return {
                ...state,
                isEditingList: true
            }

        case DISABLE_LIST_EDIT_MODE:
            return {
                ...state,
                isEditingList: false
            }

        default:
            return state
    }
}

