import {BoardDataActionTypes} from "@/store/types/boardData";

export default function deleteList(id: string) {
    return {
        type: BoardDataActionTypes.DELETE_LIST,
        payload: id
    }
}