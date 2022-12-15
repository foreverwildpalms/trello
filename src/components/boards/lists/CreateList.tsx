import React, {FC} from 'react';
import { AddListIcon, List } from "@/components/boards/styles/styledCard";

interface ICreateList {
    onClick: () => void
}

const CreateList: FC<ICreateList> = ({onClick}) => {
    return (
        <List onClick={onClick}>
            <AddListIcon>
                +
            </AddListIcon>
        </List>
    );
}

export default CreateList;