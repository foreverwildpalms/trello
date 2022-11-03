import { SUBMIT_BOARD, PUT_BOARD_INTO_COLLECTION } from './types';
import Store from "@/Store";

export default function submitBoard(title) {
    return dispatch => {
        dispatch({ type: SUBMIT_BOARD, payload: title });

        const newBoard = {
            id: Store.getState().newBoard.id,
            title: Store.getState().newBoard.title
        }

        dispatch({ type: PUT_BOARD_INTO_COLLECTION, payload: newBoard });
    }
}
