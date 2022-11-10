import {BoardDataActionTypes} from "@/store/types/boardData";

export default function submitItem(item: string, listId: string) {
    return {
        type: BoardDataActionTypes.SUBMIT_ITEM,
        payload: { itemName: item, listId }
    }
}