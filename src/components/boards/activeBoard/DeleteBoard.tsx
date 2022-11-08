import React from 'react';
import { DeleteBtn } from '@/components/boards/styles/styledActivePage';
import { connect } from 'react-redux';
import deleteBoard from "@/actions/deleteBoard";
import {Link} from "react-router-dom";

const DeleteBoard = ({id, deleteBoard}) => {
    return (
        <Link to={`/`}>
            <DeleteBtn onClick={() => deleteBoard(id)}>
                Удалить доску
            </DeleteBtn>
        </Link>
    );
}

export default connect(null,   { deleteBoard })(DeleteBoard);