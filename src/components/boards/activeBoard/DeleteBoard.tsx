import React, { FC } from 'react';
import { DeleteBtn } from '@/components/boards/styles/styledActivePage';
import { deleteBoard } from '@/store/reducers/collectionSlice';
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/store";

interface IDeleteBoard {
    id: string,
}

const DeleteBoard: FC<IDeleteBoard> = ({id}) => {
    const dispatch = useAppDispatch();

    return (
        <Link to={`/`}>
            <DeleteBtn onClick={() => dispatch(deleteBoard(id))}>
                Удалить доску
            </DeleteBtn>
        </Link>
    );
}

export default DeleteBoard;