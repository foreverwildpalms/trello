import {ActiveBoardTypes} from "@/store/types/boardData";

export default function disableListEditMode() {
    return {
        type: ActiveBoardTypes.DISABLE_LIST_EDIT_MODE
    }
}