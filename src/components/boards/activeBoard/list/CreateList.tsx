import React from 'react';
import { List } from "@/components/boards/styles/styledCard";

const CreateList = ({onClick}) => {
    return (
        <List onClick={onClick}>Добавить список</List>
    );
}

export default CreateList;