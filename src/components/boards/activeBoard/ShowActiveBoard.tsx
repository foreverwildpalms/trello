import React, { useEffect } from 'react';
import { enableListEditMode } from '@/store/reducers/activeBoardSlice';
import { useParams } from "react-router-dom";
import { ActiveTitle, ListWrapper } from "@/components/boards/styles/styledActivePage"
import CreateList from "@/components/boards/activeBoard/list/CreateList";
import CreateListActive from "@/components/boards/activeBoard/list/CreateListActive";
import Lists from "@/components/boards/activeBoard/list/Lists";
import DeleteBoard from "@/components/boards/activeBoard/DeleteBoard";
import { useAppDispatch, useAppSelector } from "@/store";
import { activeBoardSelector } from "@/store/selectors";
import openBoard from "@/utils/async/openBoard";

const ShowActiveBoard = () => {
    const activeBoard = useAppSelector(activeBoardSelector);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            dispatch(openBoard(params.id));
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
                    ? <CreateListActive idBoard={activeBoard.id} />
                    : <CreateList onClick={() => dispatch(enableListEditMode())} />
                }
            </ListWrapper>
            <DeleteBoard id={activeBoard.id} />
        </>
    )
}

export default ShowActiveBoard;