import Store from "@/Store";
import {ActiveBoardTypes, SelectBoardAction, SelectBoardSuccessAction} from "@/store/types/boardData";
import {Dispatch} from "react";

export default function selectActiveBoard(id: string) {
    return (dispatch: Dispatch<SelectBoardAction | SelectBoardSuccessAction>) => {
        const collection = Store.getState().collection;
        const activeBoard = collection.filter((board) => board.id === id)[0] || [];

        dispatch({ type: ActiveBoardTypes.SELECT_ACTIVE_BOARD, payload: activeBoard })
        dispatch({ type: ActiveBoardTypes.SELECT_ACTIVE_BOARD_SUCCESS }); // симуляция отправки данных
    }
}