import { submitBoard } from "@/store/slices/newBoardSlice";
import { putBoardIntoCollection } from "@/store/slices/collectionSlice";
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