import React from 'react';
import { Card, Title, Top, CloseBoardIcon, Body, NameBoard } from '../styles/styledCard';
import closeIcon from "@/assets/closeIcon.svg";
import CreateForm from "@/components/boards/creationBoard/CreateForm";
import { connect } from 'react-redux';
import cancelCreatingBoard from "@/actions/cancelCreatingBoard";

function CreateCardActive({cancelCreatingBoard}) {
    return (
        <Card>
            <Top>
                <Title>Новая доска</Title>
                <CloseBoardIcon
                    src={closeIcon}
                    onClick={cancelCreatingBoard}
                />
            </Top>
            <Body>
                <NameBoard>Название</NameBoard>
                <CreateForm />
            </Body>
        </Card>
    );
}

export default connect(null, { cancelCreatingBoard })(CreateCardActive);