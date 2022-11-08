import { combineReducers } from 'redux';
import {
    SUBMIT_LIST,
    SUBMIT_ITEM,
    SELECT_ACTIVE_BOARD,
    DELETE_LIST
} from "@/actions/types";
import uniqueId from 'lodash/uniqueId';

const ListReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_ACTIVE_BOARD:
            return action.payload.data || [];


        case SUBMIT_LIST: {
            const listId = uniqueId("list_");

            return {
                ...state,
                [listId]: {
                    name: action.payload,
                    id: listId,
                    items: []
                }
            };
        }

        case SUBMIT_ITEM: {
            const itemId = uniqueId("item_");
            const { listId, itemName } = action.payload;
            const currentList = state[listId];

            currentList.items.push({
                name: itemName, itemId, listId, isArchived: false
            })
            return {
                ...state,
                [listId]: currentList,
            }
        }

        case DELETE_LIST: {
            const newState = {...state}
            delete newState[action.payload];
            return {
                ...newState
            }
        }

        default:
            return state
    }
}

const ActiveBoardReducer = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;
