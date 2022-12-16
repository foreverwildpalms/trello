import { putChangeItemIntoCollection } from "@/store/slices/collectionSlice";
import { changeItem } from "@/store/slices/activeBoardDataSlice";

const addItem = (boardId, listId, itemId, isCompleted) => {
    return async (dispatch) => {
        await dispatch(changeItem({
            listId: listId,
            itemId: itemId,
            value: !isCompleted
        }));

        await(dispatch(putChangeItemIntoCollection({
            boardId: boardId,
            listId: listId,
            itemId: itemId,
            value: !isCompleted
        })));
    }
}

export default addItem;