export const setData = boards => {
    try {
        // if (boards.collection.length) {
        //     boards.collection.map( board => {
        //         if (board.id === boards.activeBoard.id) {
        //             board.data = boards.activeBoardData
        //         }
        //     })
        // }
        const serializeActiveBoardState = JSON.stringify(boards);
        localStorage.setItem('boardsCollection', serializeActiveBoardState);
    }
    catch (err) {
        console.log(err);
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
