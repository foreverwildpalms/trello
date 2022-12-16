import { putItemIntoCollection } from "@/store/slices/collectionSlice";
import store from "@/store";
import { submitItem } from "@/store/slices/activeBoardDataSlice";

const addItem = (title, listId, boardId) => {
    return async (dispatch) => {
        await dispatch(submitItem({ itemName: title, listId: listId }));

        const items = store.getState().activeBoardData.listItems.listData[listId].items;
        await dispatch(putItemIntoCollection({boardId, listId, items}));
    }
}

export default addItem;