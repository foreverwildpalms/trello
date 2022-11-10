import React, {FC} from 'react';
import { connect } from 'react-redux'
import CreateCardActive from "@/components/boards/creationBoard/CreateCardActive";
import CreateCard from "@/components/boards/creationBoard/CreateCard";
import {IRootReducer} from "@/store/reducers/types";

interface INewBoard {
    isBoardOpen: boolean,
    title: string | null,
    id: string | null,
    success: boolean,
}

interface ICreateBoard {
    newBoard: INewBoard
}

const CreateBoard: FC<ICreateBoard> = ({ newBoard }) => {
    return newBoard.isBoardOpen
        ? <CreateCardActive />
        : <CreateCard />
}

const mapStateToProps = (state: IRootReducer) => {
    return {
        newBoard: state.newBoard
    }
}

export default connect(mapStateToProps, {})(CreateBoard);