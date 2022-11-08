import { DELETE_LIST } from './types';

export default function deleteList(id) {
    return {
        type: DELETE_LIST,
        payload: id
    }
}