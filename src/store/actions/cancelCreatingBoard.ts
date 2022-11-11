import {BoardActionTypes} from "../types/newBoard";

export default function cancelCreatingBoard() {
    return {
        type: BoardActionTypes.CANCEL_CREATING_BOARD,
        payload: false,
    }
}