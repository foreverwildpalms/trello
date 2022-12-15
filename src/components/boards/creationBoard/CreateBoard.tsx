import React from 'react';
import CreateCardActive from "@/components/boards/creationBoard/CreateCardActive";
import CreateCard from "@/components/boards/creationBoard/CreateCard";
import { useAppSelector } from "@/store";
import { newBoardSelector } from "@/store/selectors";

const CreateBoard = () => {
    const newBoard = useAppSelector(newBoardSelector);

    return newBoard.isBoardOpen
        ? <CreateCardActive />
        : <CreateCard />
}

export default CreateBoard;