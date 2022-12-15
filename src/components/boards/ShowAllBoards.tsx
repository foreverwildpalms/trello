import React from 'react';
import Board from "@/components/boards/Board";
import { useAppSelector } from "@/store";
import { collectionSelector } from "@/store/selectors";

const ShowAllBoards = () => {
    const collection = useAppSelector(collectionSelector);

    return (
    <>
        {collection.map((board) => {
            return <Board key={board.id} id={board.id} title={board.title} />
        })}
    </>)
}

export default ShowAllBoards;