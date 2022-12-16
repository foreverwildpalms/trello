import React, { useEffect } from 'react';
import { enableListEditMode } from '@/store/slices/activeBoardSlice';
import { useParams } from "react-router-dom";
import { ActiveTitle, ListWrapper } from "@/components/boards/styles/styledActivePage"
import CreateList from "@/components/lists/CreateList";
import CreateListActive from "@/components/lists/CreateListActive";
import Lists from "@/components/lists";
import DeleteBoard from "@/components/boards/activeBoard/DeleteBoard";
import { useAppDispatch, useAppSelector } from "@/store";
import { activeBoardSelector } from "@/store/selectors";
import openBoard from "@/utils/async/openBoard";

const ActiveBoard = () => {
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
                <Lists idBoard={activeBoard.id} />
                {activeBoard.isEditingList
                    ? <CreateListActive idBoard={activeBoard.id} />
                    : <CreateList onClick={() => dispatch(enableListEditMode())} />
                }
            </ListWrapper>
            <DeleteBoard id={activeBoard.id} />
        </>
    )
}

export default ActiveBoard;