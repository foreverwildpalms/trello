import React from 'react';
import { List, DeleteListBtn, ListTitle } from "@/components/boards/styles/styledCard";
import CreateItem from "@/components/boards/activeBoard/items/CreateItem";
import { connect } from 'react-redux';
import deleteList from "@/store/actions/deleteList";

const ListItem = ({ id, name, deleteList }) => {
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