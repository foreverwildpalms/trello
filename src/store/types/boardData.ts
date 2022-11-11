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

export type IItem = {
    name: string,
    itemId: string,
    listId: string,
    isArchived: boolean
}

export type IList = {
    name: string,
    id: string,
    items: Array<IItem>
}

export type ILists = {
    [key: string]: IList
};

export interface BoardState {
    id: string,
    title: string,
    data: ILists
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

export interface SelectBoardAction {
    type: ActiveBoardTypes.SELECT_ACTIVE_BOARD,
    payload: BoardState
}

export interface SelectBoardSuccessAction {
    type: ActiveBoardTypes.SELECT_ACTIVE_BOARD_SUCCESS,
}

export interface EnableListAction {
    type: ActiveBoardTypes.ENABLE_LIST_EDIT_MODE,
    payload: true
}

interface DisableListAction {
    type: ActiveBoardTypes.DISABLE_LIST_EDIT_MODE,
}

export type BoardAction = SubmitListAction | SubmitItemAction | DeleteListAction | SelectBoardAction;

export type ActiveBoardAction = SelectBoardAction | SelectBoardSuccessAction | EnableListAction | DisableListAction;
