import React from 'react';
import Board from "@/components/boards/Board";

function ShowAllBoards({collection}) {
    return collection.map((board) => {
        return <Board key={board.id} id={board.id} title={board.title} />
    })
}

export default ShowAllBoards;