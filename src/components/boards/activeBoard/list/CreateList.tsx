import React from 'react';
import {AddListIcon, List} from "@/components/boards/styles/styledCard";

const CreateList = ({onClick}) => {
    return (
        <List onClick={onClick}>
            <AddListIcon>
                +
            </AddListIcon>
        </List>
    );
}

export default CreateList;