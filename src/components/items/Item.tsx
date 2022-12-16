import React, { FC, useState } from 'react';
import { Checkbox, DeleteItemIcon, ItemText, ItemWrap } from "@/components/items/styles";
import { useAppDispatch } from "@/store";
import { IItem } from "@/store/types/boardData";
import changeItem from "@/utils/async/changeItem";
import deleteItem from "@/utils/async/deleteItem";

interface IProps {
    item: IItem,
    boardId: string
}

const Item: FC<IProps> = ({item, boardId}) => {
    const { name, itemId, listId, isCompleted } = item;
    const [value, setValue] = useState(isCompleted);
    const dispatch = useAppDispatch();

    const handleInput = () => {
        setValue((prev) => !prev);
        dispatch(changeItem(boardId, listId, itemId, isCompleted));
    }

    const handleDeleteButton = () => {
        dispatch(deleteItem(boardId, listId, itemId));
    }

    return (
        <ItemWrap>
            <Checkbox
                type="checkbox"
                checked={value}
                onChange={handleInput}
            />
            <ItemText>{name}</ItemText>
            <DeleteItemIcon onClick={handleDeleteButton}>
                &#10006;
            </DeleteItemIcon>
        </ItemWrap>
    );
}

export default Item;