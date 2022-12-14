import Index from "@/store";
import { Dispatch } from "react";
import {CollectionActionTypes, PutBoardAction} from "@/store/types/collectionOfBoards";
import {BoardActionTypes, SubmitBoardAction} from "@/store/types/newBoard";

export default function submitBoard(title: string) {
    return (dispatch: Dispatch<SubmitBoardAction | PutBoardAction>) => {
        dispatch({ type: BoardActionTypes.SUBMIT_BOARD, payload: title });

        const newBoard = {
            id: Index.getState().newBoard.id,
            title: Index.getState().newBoard.title
        }

        dispatch({ type: CollectionActionTypes.PUT_BOARD_INTO_COLLECTION, payload: {
            ...newBoard,
            data: {}
        }});
    }
}
