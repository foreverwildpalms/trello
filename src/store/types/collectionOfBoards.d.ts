import {BoardState} from "@/store/types/boardData";

export enum CollectionActionTypes {
    DELETE_BOARD = 'DELETE_BOARD',
    PUT_BOARD_INTO_COLLECTION = 'PUT_BOARD_INTO_COLLECTION',
}

export type CollectionState = Array<BoardState>

interface DeleteBoardAction {
    type: CollectionActionTypes.DELETE_BOARD,
    payload: string
}

interface PutBoardAction {
    type: CollectionActionTypes.PUT_BOARD_INTO_COLLECTION,
    payload: {
        id: string,
        title: string,
        data: {}
    }
}
export type BoardAction = DeleteBoardAction | PutBoardAction;





