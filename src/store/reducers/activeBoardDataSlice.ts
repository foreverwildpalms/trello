import { createSlice } from "@reduxjs/toolkit";
import { IList, ILists } from "@/store/types/boardData";
import uniqueId from 'lodash/uniqueId';
import { combineReducers } from "redux";

const ListDataSlice = createSlice({
    name: 'ListData',
    initialState: {
        listData: {} as ILists
    },
    reducers: {
        initLists(state, action) {
            state.listData = action.payload
        },
        submitList(state, action) {
            const listId = uniqueId("list_");
            state.listData[listId] = {
                name: action.payload,
                id: listId,
                items: []
            }
        },
        submitItem(state, action) {
            const itemId = uniqueId("item_");
            const { listId, itemName } = action.payload;
            const currentList: IList = state.listData[listId];
            currentList.items.push({
                name: itemName, itemId, listId, isCompleted: false
            })
            state.listData[listId] = currentList;
        },
        deleteList(state, action) {
            delete state.listData[action.payload.toString()];
        },
        changeItem(state, action) {
            console.log(action.payload.value);
            state.listData[action.payload.listId].items.map((item) => {
                if (item.itemId === action.payload.id) {
                    item.isCompleted = action.payload.value
                }
            })
        }
    }
})

const activeBoardDataSlice = combineReducers({
    listItems: ListDataSlice.reducer,
})

export const {
    initLists,
    submitList,
    submitItem,
    deleteList,
    changeItem
} = ListDataSlice.actions;

export default activeBoardDataSlice;