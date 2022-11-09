import React, {FC} from 'react';
import Board from "@/components/boards/Board";
import {ICollection, IBoard} from "@/components/boards/types";

type IShowAllBoards = {
    collection: ICollection
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