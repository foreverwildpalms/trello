import { SELECT_ACTIVE_BOARD, SELECT_ACTIVE_BOARD_SUCCESS } from './types';
import find from 'lodash/find';
import Store from "@/Store";

export default function selectActiveBoard (id) {
    return dispatch => {
        const collection = Store.getState().collection;
        const activeBoard = find(collection, board => board.id === id); // ?

        dispatch({ type: SELECT_ACTIVE_BOARD, payload: activeBoard });
        dispatch({ type: SELECT_ACTIVE_BOARD_SUCCESS }); // симуляция отправки данных
    }
}