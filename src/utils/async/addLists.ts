import { putListIntoCollection } from "@/store/slices/collectionSlice";
import store from "@/store";
import {submitList} from "@/store/slices/activeBoardDataSlice";

const addList = (title, idBoard) => {
    return async (dispatch) => {
        await dispatch(submitList(title));

        const lists = store.getState().activeBoardData.listItems.listData;
        await dispatch(putListIntoCollection({
            id: idBoard,
            data: lists
        }))
    }
}

export default addList;