import React from 'react';
import ShowAllBoards from "@/components/boards/ShowAllBoards";
import CreateBoard from "@/components/boards/creationBoard/CreateBoard";
import { WrapOfCards } from "@/components/boards/styles/styledCard";
import { useAppSelector } from "@/store";
import { collectionSelector } from "@/store/selectors";


const Boards = () => {
    const collection = useAppSelector(collectionSelector);

    return (
        <WrapOfCards>
            <CreateBoard />
            {!!collection.length && <ShowAllBoards />}
        </WrapOfCards>
    )
}

export default Boards;
