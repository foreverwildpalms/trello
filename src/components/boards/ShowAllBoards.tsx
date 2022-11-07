import React from 'react';
import { Card, Title } from '@/components/boards/styles/styledCard';
import { Link } from 'react-router-dom';

function ShowAllBoards({collection}) {
    return collection.map((bord) => {
         return (
             <Link to={`/b/${bord.id}`} key={bord.id}>
                 <Card>
                     <Title>{bord.title}</Title>
                 </Card>
             </Link>
             )
    })
}

export default ShowAllBoards;