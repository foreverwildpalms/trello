import { ENABLE_LIST_EDIT_MODE } from './types';

export default function enableListEditMode() {
    return dispatch => {
        dispatch({type: ENABLE_LIST_EDIT_MODE, payload: true})
    }
}