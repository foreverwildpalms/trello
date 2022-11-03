import { CANCEL_CREATING_BOARD } from './types';

export default function cancelCreatingBoard() {
    return {
        type: CANCEL_CREATING_BOARD,
        payload: false,
    }
}