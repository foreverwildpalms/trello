import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux'
import selectActiveBoard from "@/store/actions/selectActiveBoard";
import enableListEditMode from "@/store/actions/enableListEditMode";
import {useParams} from "react-router-dom";
import { ActiveTitle, ListWrapper } from "@/components/boards/styles/styledActivePage"
import CreateList from "@/components/boards/activeBoard/list/CreateList";
import CreateListActive from "@/components/boards/activeBoard/list/CreateListActive";
import Lists from "@/components/boards/activeBoard/list/Lists";
import DeleteBoard from "@/components/boards/activeBoard/DeleteBoard";
import {RootState} from "@/store/types/root";
import {ActiveBoard} from "@/store/types/boardData";

interface IShowActiveBoard {
    activeBoard: ActiveBoard,
    selectActiveBoard: (id: string) => void,
    enableListEditMode: () => void,
}

const ShowActiveBoard: FC<IShowActiveBoard> = ({activeBoard, selectActiveBoard, enableListEditMode}) => {
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            selectActiveBoard(params.id)
        }
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

function mapStateToProps(state: RootState) {
    return {
        activeBoard: state.activeBoard
    }
}

export default connect(
    mapStateToProps,
    {selectActiveBoard, enableListEditMode
    }
)(ShowActiveBoard);