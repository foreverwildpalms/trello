import { combineReducers } from 'redux';
import { SUBMIT_LIST } from "@/actions/types";
import uniqueId from 'lodash/uniqueId';

const ListReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_LIST: {
            const listId = uniqueId("list_");

            return {
                ...state,
                [listId]: {
                    name: action.payload,
                    id: listId,
                    cards: []
                }
            };
        }

        default:
            return state
    }
}

const ActiveBoardReducer = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;
