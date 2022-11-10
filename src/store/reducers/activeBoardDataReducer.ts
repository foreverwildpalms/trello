import { combineReducers } from 'redux';
import uniqueId from 'lodash/uniqueId';
import {ActiveBoardTypes, BoardAction, BoardDataActionTypes, List, Lists} from "@/store/types/boardData";

const initialState = {};

const ListReducer = (state: Lists = initialState, action: BoardAction): Lists => {
    switch (action.type) {
        case ActiveBoardTypes.SELECT_ACTIVE_BOARD:
            return action.payload.data || [];

        case BoardDataActionTypes.SUBMIT_LIST: {
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

        case BoardDataActionTypes.SUBMIT_ITEM: {
            const itemId = uniqueId("item_");
            const { listId, itemName } = action.payload;
            const currentList: List = state[listId];
            currentList.items.push({
                name: itemName, itemId, listId, isArchived: false
            })
            return {
                ...state,
                [listId]: currentList,
            }
        }

        case BoardDataActionTypes.DELETE_LIST: {
            const newState = {...state}
            delete newState[action.payload.toString()];
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
