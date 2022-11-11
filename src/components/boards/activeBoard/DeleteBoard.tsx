import React, {FC} from 'react';
import { DeleteBtn } from '@/components/boards/styles/styledActivePage';
import { connect } from 'react-redux';
import deleteBoard from "@/store/actions/deleteBoard";
import {Link} from "react-router-dom";

interface IDeleteBoard {
    id: string,
    deleteBoard: (id: string) => void
}

const DeleteBoard: FC<IDeleteBoard> = ({id, deleteBoard}) => {
    return (
        <Link to={`/`}>
            <DeleteBtn onClick={() => deleteBoard(id)}>
                Удалить доску
            </DeleteBtn>
        </Link>
    );
}

export default connect(null,   { deleteBoard })(DeleteBoard);