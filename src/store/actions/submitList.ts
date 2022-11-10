import {BoardDataActionTypes} from "@/store/types/boardData";

export default function submitList(name: string) {
    return { type: BoardDataActionTypes.SUBMIT_LIST, payload: name }
}