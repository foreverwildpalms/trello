import {ActiveBoardTypes} from "@/store/types/boardData";

export default function enableListEditMode() {
    return {
        type: ActiveBoardTypes.ENABLE_LIST_EDIT_MODE,
        payload: true
    }
}