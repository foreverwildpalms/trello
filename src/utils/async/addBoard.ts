import { submitBoard } from "@/store/reducers/newBoardSlice";
import { putBoardIntoCollection } from "@/store/reducers/collectionSlice";
import store from "@/store";

const addBoard = (title) => {
    return async (dispatch) => {
        await dispatch(submitBoard(title));

        await dispatch(putBoardIntoCollection({
            id: store.getState().newBoard.newBoard.id,
            title: store.getState().newBoard.newBoard.title,
            data: {}
        }));
    }
}

export default addBoard;