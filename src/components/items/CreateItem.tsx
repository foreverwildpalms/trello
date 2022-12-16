import React, {FC, FormEvent, useState} from 'react';
import { StyledForm } from "@/components/boards/styles/styledCard";
import { ItemInput } from "@/components/items/styles";
import Item from "@/components/items/Item";
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
                    key={item.itemId}
                    item={item}
                    boardId={boardId}
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