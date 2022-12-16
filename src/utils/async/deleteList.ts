import { deleteListFromCollection } from "@/store/reducers/collectionSlice";
import { deleteList } from "@/store/reducers/activeBoardDataSlice";
import store from "@/store";

const addList = (id, idBoard) => {
    return async (dispatch) => {
        await dispatch(deleteList(id));

        const lists = store.getState().activeBoardData.listItems.listData;

        await dispatch(deleteListFromCollection({
            id: idBoard,
            data: lists
        }))
    }
}

export default addList;