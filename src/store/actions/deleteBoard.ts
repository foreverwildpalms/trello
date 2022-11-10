import {CollectionActionTypes} from "@/store/types/collectionOfBoards";

export default function deleteBoard(id: string) {
    return {
        type: CollectionActionTypes.DELETE_BOARD,
        payload: id
    }
}