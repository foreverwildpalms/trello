export const setData = boards => {
    try {
        boards.collection.map( board => {
            if (board.id === boards.activeBoard.id) {
                board.data = boards.activeBoardData.listItems
            }
        })
        const serializeActiveBoardState = JSON.stringify(boards)
        localStorage.setItem('boardsCollection', serializeActiveBoardState);
    } catch (err) {
        new Error(err);
    }
}

export const getData = () => {
    try {
        const serializedBoardCollectionState = localStorage.getItem('boardsCollection');
        return serializedBoardCollectionState === null
            ? undefined
            : JSON.parse(serializedBoardCollectionState)
    } catch (err) {
        return undefined;
    }
}