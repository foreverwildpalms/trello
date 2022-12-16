import store from "@/store";
import { selectActiveBoard, selectActiveBoardSuccess } from "@/store/slices/activeBoardSlice";
import {initLists} from "@/store/slices/activeBoardDataSlice";

const openBoard = (id) => {
    return async (dispatch) => {
        const activeBoard = store.getState().collection.collection
            .filter((board) => board.id === id)[0] || [];

        await dispatch(selectActiveBoard(activeBoard));
        await dispatch(selectActiveBoardSuccess()); // симуляция отправки данных
        await dispatch(initLists(activeBoard.data)); // получаем список
    }
}

export default openBoard;