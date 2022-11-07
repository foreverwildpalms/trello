import { combineReducers } from 'redux';
import { SUBMIT_LIST, SUBMIT_ITEM } from "@/actions/types";
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
                    items: []
                }
            };
        }

        case SUBMIT_ITEM: {
            const itemId = uniqueId("item_");
            const { listId, itemName } = action.payload;
            const currentList = state[listId];

            console.log(currentList);

            currentList.items.push({
                name: itemName, itemId, listId, isArchived: false
            })
            return {
                ...state,
                [listId]: currentList,
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
