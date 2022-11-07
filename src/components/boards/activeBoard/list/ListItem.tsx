import React from 'react';
import { List } from "@/components/boards/styles/styledCard";
import { ListTitle } from "@/components/boards/styles/styledCard";
import CreateItem from "@/components/boards/activeBoard/items/CreateItem";

const ListItem = ({id, name}) => {
    return (
        <>
            <List>
                <ListTitle>{name}</ListTitle>
                <CreateItem listId={id} />
            </List>
        </>
    );
}

export default ListItem;