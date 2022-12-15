import { putListIntoCollection } from "@/store/reducers/collectionSlice";
import store from "@/store";
import {submitList} from "@/store/reducers/activeBoardDataSlice";

const addList = (title, idBoard) => {
    return async (dispatch) => {
        await dispatch(submitList(title));

        const list = store.getState().activeBoardData.listItems.listData;
        await dispatch(putListIntoCollection({
            id: idBoard,
            data: list
        }))
        console.log(store.getState());
    }
}

export default addList;