export enum BoardDataActionTypes {
    SUBMIT_LIST = 'SUBMIT_LIST',
    SUBMIT_ITEM = 'SUBMIT_ITEM',
    DELETE_LIST = 'DELETE_LIST'
}

export enum ActiveBoardTypes {
    SELECT_ACTIVE_BOARD = 'SELECT_ACTIVE_BOARD',
    SELECT_ACTIVE_BOARD_SUCCESS = 'SELECT_ACTIVE_BOARD_SUCCESS',
    ENABLE_LIST_EDIT_MODE = 'ENABLE_LIST_EDIT_MODE',
    DISABLE_LIST_EDIT_MODE = 'DISABLE_LIST_EDIT_MODE'
}

type Item = {
    name: string,
    itemId: string,
    listId: string,
    isArchived: boolean
}

export type List = {
    name: string,
    id: string,
    items: Array<Item>
}

export type Lists = {
    [key: string]: List
}

export interface BoardState {
    id: string,
    title: string,
    data: Lists
}

export interface ActiveBoard {
    title: string,
    id: string,
    isFetching: boolean,
    isEditingList: boolean,
}

interface SubmitListAction {
    type: BoardDataActionTypes.SUBMIT_LIST,
    payload: string
}

interface SubmitItemAction {
    type: BoardDataActionTypes.SUBMIT_ITEM,
    payload: {
        itemName: string,
        listId: string
    }
}

interface DeleteListAction {
    type: BoardDataActionTypes.DELETE_LIST,
    payload: string
}

interface SelectBoardAction {
    type: ActiveBoardTypes.SELECT_ACTIVE_BOARD,
    payload: BoardState
}

interface SelectBoardSuccessAction {
    type: ActiveBoardTypes.SELECT_ACTIVE_BOARD_SUCCESS,
}

interface EnableListAction {
    type: ActiveBoardTypes.ENABLE_LIST_EDIT_MODE,
    payload: true
}

interface DisableListAction {
    type: ActiveBoardTypes.DISABLE_LIST_EDIT_MODE,
}

export type BoardAction = SubmitListAction | SubmitItemAction | DeleteListAction | SelectBoardAction;

export type ActiveBoardAction = SelectBoardAction | SelectBoardSuccessAction | EnableListAction | DisableListAction;
