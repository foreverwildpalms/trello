import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import selectActiveBoard from "@/store/actions/selectActiveBoard";
import enableListEditMode from "@/store/actions/enableListEditMode";
import {useParams} from "react-router-dom";
import { ActiveTitle, ListWrapper } from "@/components/boards/styles/styledActivePage"
import CreateList from "@/components/boards/activeBoard/list/CreateList";
import CreateListActive from "@/components/boards/activeBoard/list/CreateListActive";
import Lists from "@/components/boards/activeBoard/list/Lists";
import DeleteBoard from "@/components/boards/activeBoard/DeleteBoard";

const ShowActiveBoard = ({activeBoard, selectActiveBoard, enableListEditMode}) => {
    const params = useParams();

    useEffect(() => {
        selectActiveBoard(params.id);
    }, []);

    if (activeBoard.isFetching) {
        return (
            <div>loading...</div>
        )
    }

    return (
        <>
            <ActiveTitle>{activeBoard.title}</ActiveTitle>
            <ListWrapper>
                <Lists />
                {activeBoard.isEditingList
                    ? <CreateListActive />
                    : <CreateList onClick={enableListEditMode} />
                }
            </ListWrapper>
            <DeleteBoard id={activeBoard.id} />
        </>
    )
}

function mapStateToProps({ activeBoard }) {
    return {
        activeBoard
    }
}

export default connect(
    mapStateToProps,
    {selectActiveBoard, enableListEditMode
    }
)(ShowActiveBoard);