import React, {FC} from 'react';
import Board from "@/components/boards/Board";
import {CollectionState} from "@/store/types/collectionOfBoards";


type IShowAllBoards = {
    collection: CollectionState
}

const ShowAllBoards: FC<IShowAllBoards> = ({ collection }) => {
    return (
    <>
        {collection.map((board) => {
            return <Board key={board.id} id={board.id} title={board.title} />
        })}
    </>)
}

export default ShowAllBoards;