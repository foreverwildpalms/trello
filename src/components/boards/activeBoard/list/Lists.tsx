import React, {FC} from 'react';
import { connect } from 'react-redux'
import ListItem from "./ListItem";
import {RootState} from "@/store/types/root";
import {ILists} from "@/store/types/boardData";

interface IListsProps {
    activeBoardData: {
        listItems: ILists
    }
}

const Lists: FC<IListsProps> = ({ activeBoardData }) => {
    const renderListItems = () => {
        const lists = activeBoardData.listItems;
        const listsKeys = Object.keys(lists);
        return listsKeys.map((key) => {
            return <ListItem id={lists[key].id} key={lists[key].id} name={lists[key].name} />
        })
    }

    return (
        <>
            {renderListItems()}
        </>
    );
}

function mapStateToProps(state: RootState) {
    return {
        activeBoardData: state.activeBoardData
    }
}

export default connect(mapStateToProps, {})(Lists);