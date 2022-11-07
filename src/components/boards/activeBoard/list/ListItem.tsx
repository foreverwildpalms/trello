import React from 'react';
import { List } from "@/components/boards/styles/styledCard";

const ListItem = ({id, key, name}) => {
    return (
        <List>{name}</List>
    );
}

export default ListItem;