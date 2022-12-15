import React, {FC, FormEvent, useState} from 'react';
import { ItemInput, StyledForm } from "@/components/boards/styles/styledCard";
import Item from "@/components/boards/items/Item";
import { useAppDispatch, useAppSelector } from "@/store";
import { activeBoardDataSelector } from "@/store/selectors";
import addItem from "@/utils/async/addItem";

interface ICreateItem {
    listId: string,
    boardId: string
}

const CreateItem: FC<ICreateItem> = ({ listId, boardId }) => {
    const activeBoardData = useAppSelector(activeBoardDataSelector);
    const dispatch = useAppDispatch();

    const [state, setState] = useState('');
    const changeInputHandler = (event: FormEvent<HTMLInputElement>) => {
        setState(event.currentTarget.value);
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const text = state.trim();
        if (text) {
            dispatch(addItem(text, listId, boardId))
            setState('');
        }
    }

    const renderCards = () => {
        return activeBoardData[listId].items?.map((item) => {
            return (
                <Item
                    key={item.listId}
                    title={item.name}
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

export default CreateItem;