import React from 'react';
import { Card, Title, Top, CloseBoardIcon, Body, NameBoard } from '@/components/boards/styles/styledCard';
import closeIcon from "@/assets/closeIcon.svg";
import CreateForm from "@/components/boards/creationBoard/CreateForm";
import {useAppDispatch} from "@/store";
import { cancelCreatingBoard } from '@/store/reducers/newBoardSlice';

const CreateCardActive = () => {
    const dispatch = useAppDispatch();

    return (
        <Card>
            <Top>
                <Title>Новая доска</Title>
                <CloseBoardIcon
                    src={closeIcon}
                    onClick={() => dispatch(cancelCreatingBoard())}
                />
            </Top>
            <Body>
                <NameBoard>Название</NameBoard>
                <CreateForm />
            </Body>
        </Card>
    );
}

export default CreateCardActive;