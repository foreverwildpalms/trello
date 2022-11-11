import React, {FC, FormEvent, useState} from 'react';
import { connect } from 'react-redux';
import { ItemInput, StyledForm } from "@/components/boards/styles/styledCard";
import submitItem from "@/store/actions/submitItem";
import Item from "@/components/boards/activeBoard/items/Item";
import {RootState} from "@/store/types/root";
import {ILists} from "@/store/types/boardData";

interface ICreateItem {
    activeBoardData: {
        listItems: ILists
    },
    submitItem: (item: string, listId: string) => void,
    listId: string
}

const CreateItem: FC<ICreateItem> = ({activeBoardData, submitItem, listId}) => {
    const [state, setState] = useState('');
    const changeInputHandler = (event: FormEvent<HTMLInputElement>) => {
        setState(event.currentTarget.value);
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const text = state.trim();
        if (text) {
            submitItem(state, listId);
            setState('');
        }
    }

    const renderCards = () => {
        return activeBoardData.listItems[listId].items?.map((item) => {
            return (
                <Item
                    key={item.listId}
                    title={item.name}
                    // listId={card.listId}
                />
            )
        })
    }

    return (
        <StyledForm onSubmit={submitHandler}>
            {renderCards()}
            <ItemInput
                type="text"
                onChange={changeInputHandler}
                value={state}
                placeholder="Название задачи"
            />
        </StyledForm>
    );
}

function mapStateToProps(state: RootState) {
    return {
        activeBoardData: state.activeBoardData
    }
}

export default connect(mapStateToProps, {submitItem})(CreateItem);