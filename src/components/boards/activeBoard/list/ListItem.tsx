import React, {FC} from 'react';
import { List, DeleteListBtn, ListTitle } from "@/components/boards/styles/styledCard";
import CreateItem from "@/components/boards/activeBoard/items/CreateItem";
import { connect } from 'react-redux';
import deleteList from "@/store/actions/deleteList";

interface IListItem {
    id: string,
    name: string,
    deleteList: (id: string) => void
}

const ListItem: FC<IListItem> = ({ id, name, deleteList }) => {
    return (
        <>
            <List>
                <ListTitle>{name}</ListTitle>
                <CreateItem listId={id} />
                <DeleteListBtn onClick={() => deleteList(id)}>Удалить список</DeleteListBtn>
            </List>
        </>
    );
}

export default connect(null, { deleteList })(ListItem);