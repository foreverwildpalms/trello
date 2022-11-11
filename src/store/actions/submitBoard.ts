import Store from "@/Store";
import { Dispatch } from "react";
import {CollectionActionTypes, PutBoardAction} from "@/store/types/collectionOfBoards";
import {BoardActionTypes, SubmitBoardAction} from "@/store/types/newBoard";

export default function submitBoard(title: string) {
    return (dispatch: Dispatch<SubmitBoardAction | PutBoardAction>) => {
        dispatch({ type: BoardActionTypes.SUBMIT_BOARD, payload: title });

        const newBoard = {
            id: Store.getState().newBoard.id,
            title: Store.getState().newBoard.title
        }

        dispatch({ type: CollectionActionTypes.PUT_BOARD_INTO_COLLECTION, payload: {
            ...newBoard,
            data: {}
        }});
    }
}
