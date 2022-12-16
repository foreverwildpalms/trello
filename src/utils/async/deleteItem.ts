import { deleteItemFromCollection } from "@/store/reducers/collectionSlice";
import { deleteItem } from "@/store/reducers/activeBoardDataSlice";
import store from "@/store";

const addItem = (boardId, listId, itemId) => {
    return async (dispatch) => {
        const items = store.getState().activeBoardData.listItems.listData[listId]
            .items.filter((item) => {
                return itemId !== item.itemId
            });

        await dispatch(deleteItem({
            listId: listId,
            items
        }));

        await(dispatch(deleteItemFromCollection({
            boardId: boardId,
            listId: listId,
            items
        })));
    }
}

export default addItem;