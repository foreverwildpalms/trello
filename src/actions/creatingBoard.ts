import { CREATING_BOARD } from './types';

export default function creatingBoard() {
    return {
        type: CREATING_BOARD,
        payload: true,
    }
}