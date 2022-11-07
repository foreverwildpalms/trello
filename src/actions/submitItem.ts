import { SUBMIT_ITEM } from "./types";

export default function submitItem(item, listId) {
    return {
        type: SUBMIT_ITEM,
        payload: { itemName: item, listId }
    }
}