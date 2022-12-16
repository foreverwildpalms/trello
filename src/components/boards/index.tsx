import React from 'react';
import CreateBoard from "@/components/boards/creationBoard/CreateBoard";
import { WrapOfCards } from "@/components/boards/styles/styledCard";
import { useAppSelector } from "@/store";
import { collectionSelector } from "@/store/selectors";
import Board from "@/components/boards/Board";


const Boards = () => {
    const collection = useAppSelector(collectionSelector);

    return (
        <WrapOfCards>
            <CreateBoard />
            {!!collection.length && collection.map((board) => {
                    return <Board key={board.id} id={board.id} title={board.title} />
                })}
        </WrapOfCards>
    )
}

export default Boards;
