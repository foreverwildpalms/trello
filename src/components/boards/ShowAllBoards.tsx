import React from 'react';
import { Card, Title } from '@/components/boards/styles/styledCard'

function ShowAllBoards({collection}) {
    return collection.map((bord) => {
         return (
             <Card key={bord.id}>
                 <Title>{bord.title}</Title>
             </Card>
             )
    })
}

export default ShowAllBoards;