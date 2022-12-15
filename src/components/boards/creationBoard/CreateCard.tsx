import React from 'react';
import { Card, Title } from '@/components/boards/styles/styledCard';
import { creatingBoard } from '@/store/reducers/newBoardSlice';
import { useAppDispatch } from "@/store";

const CreateCard = () => {
    const dispatch = useAppDispatch();

    return <Card onClick={() => {
        dispatch(creatingBoard());
    }}>
        <Title>Создай новую доску...</Title>
    </Card>
}

export default CreateCard;