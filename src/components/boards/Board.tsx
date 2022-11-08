import React from 'react';
import {Link} from "react-router-dom";
import { Card, Title } from "@/components/boards/styles/styledCard";

const Board = ({id, title}) => {
    return (
        <Link to={`/b/${id}`}>
            <Card>
                <Title>{title}</Title>
            </Card>
        </Link>
    );
}

export default Board;