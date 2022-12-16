import React, {FC} from 'react';
import { List, DeleteListBtn, ListTitle } from "@/components/boards/styles/styledCard";
import CreateItem from "@/components/items/CreateItem";
import deleteList from "@/utils/async/deleteList";
import { useAppDispatch } from "@/store";

interface IListItem {
    id: string,
    idBoard: string,
    name: string,
}

const ListItem: FC<IListItem> = ({ id, idBoard, name }) => {
    const dispatch = useAppDispatch();

    const handlerDeleteBtn = () => {
        dispatch(deleteList(id, idBoard));
    }

    return (
        <>
            <List>
                <ListTitle>{name}</ListTitle>
                <CreateItem boardId={idBoard} listId={id} />
                <DeleteListBtn onClick={handlerDeleteBtn}>Удалить список</DeleteListBtn>
            </List>
        </>
    );
}

export default ListItem;