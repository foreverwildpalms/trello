import {BoardActionTypes} from "@/store/types/newBoard";

export default function creatingBoard() {
    return {
        type: BoardActionTypes.CREATING_BOARD,
        payload: true,
    }
}