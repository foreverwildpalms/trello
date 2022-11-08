import { DELETE_BOARD } from "./types";

export default function deleteBoard(id) {
    return {
        type: DELETE_BOARD,
        payload: id
    }
}