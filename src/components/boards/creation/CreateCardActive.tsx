import React from 'react';
import { Card, Title } from './styledCard';
import styled from "styled-components";
import closeIcon from "@/assets/closeIcon.svg";
import CreateForm from "@/components/boards/creation/CreateForm";
import { connect } from 'react-redux';
import cancelCreatingBoard from "@/actions/cancelCreatingBoard";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px rgb(240,240,240);
`

const CloseBoardIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`

const NameBoard = styled.h5`
  color: #4d4d4d;
  font-weight: 400;
  margin: 0 auto 5px 0;
`

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