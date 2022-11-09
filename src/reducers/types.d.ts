export type INewBoardReducer = {
    isBoardOpen: boolean,
    title: string,
    id: string,
    success: boolean,
}

type ICollectionReducer = []

type IActiveBoardReducer = {
    title: string,
    id: string,
    isFetching: false,
    isEditingList: false,
}

type IActiveBoardDataReducer = {

}

export interface IRootReducer {
    newBoard: INewBoardReducer,
    collection: ICollectionReducer,
    activeBoard: IActiveBoardReducer,
    activeBoardData: IActiveBoardDataReducer,
}