import React, { FC } from 'react';
import ListItem from "./ListItem";
import { useAppSelector } from "@/store";
import { activeBoardDataSelector } from "@/store/selectors";

interface IProps {
    idBoard: string
}

const Lists: FC<IProps> = ({idBoard}) => {
    const activeBoardData = useAppSelector(activeBoardDataSelector);

    const renderListItems = () => {
        const lists = activeBoardData;
        const listsKeys = Object.keys(lists);

        return listsKeys.map((key) => {
            return <ListItem
                id={lists[key].id}
                idBoard={idBoard}
                key={lists[key].id}
                name={lists[key].name}
            />
        })
    }

    return (
        <>
            {renderListItems()}
        </>
    );
}

export default Lists;