import React, {FC} from 'react';
import {Link} from "react-router-dom";
import { Card, Title } from "@/components/boards/styles/styledCard";

type IBoard = {
    id: string,
    title: string
}

const Board: FC<IBoard> = ({id, title}) => {
    return (
        <Link to={`/b/${id}`}>
            <Card>
                <Title>{title}</Title>
            </Card>
        </Link>
    );
}

export default Board;