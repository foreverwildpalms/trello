export enum BoardActionTypes {
    CANCEL_CREATING_BOARD = 'CANCEL_CREATING_BOARD',
    CREATING_BOARD = 'CREATING_BOARD',
    SUBMIT_BOARD = 'SUBMIT_BOARD'
}

export type NewBoardState = {
    isBoardOpen: boolean,
    title: string,
    id: string,
    success: boolean,
}

interface CreatingBoardAction {
    type: BoardActionTypes.CREATING_BOARD,
    payload: boolean
}

export interface SubmitBoardAction {
    type: BoardActionTypes.SUBMIT_BOARD,
    payload: string
}

interface CancelCreatingBoardAction {
    type: BoardActionTypes.CANCEL_CREATING_BOARD,
    payload: boolean
}

export type BoardAction = CreatingBoardAction | SubmitBoardAction | CancelCreatingBoardAction;