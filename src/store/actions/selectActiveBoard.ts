import find from 'lodash/find';
import Store from "@/Store";
import {ActiveBoardTypes} from "@/store/types/boardData";
import {Dispatch} from "react";

export default function selectActiveBoard(id: string) {
    return (dispatch: Dispatch<any>) => {
        const collection = Store.getState().collection;
        const activeBoard = find(collection, board => board.id === id); // ?

        dispatch({ type: ActiveBoardTypes.SELECT_ACTIVE_BOARD, payload: activeBoard });
        dispatch({ type: ActiveBoardTypes.SELECT_ACTIVE_BOARD_SUCCESS }); // симуляция отправки данных
    }
}