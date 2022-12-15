import React, {FC, FormEvent, useState} from 'react';
import { ItemInput, StyledForm } from "@/components/boards/styles/styledCard";
import { submitItem } from "@/store/reducers/activeBoardDataSlice";
import Item from "@/components/boards/activeBoard/items/Item";
import { useAppDispatch, useAppSelector } from "@/store";
import { activeBoardDataSelector } from "@/store/selectors";

interface ICreateItem {
    listId: string
}

const CreateItem: FC<ICreateItem> = ({ listId }) => {
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
            dispatch(submitItem({ itemName: state, listId: listId }));
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