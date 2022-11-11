import React, {FC} from 'react';
import { connect } from 'react-redux'
import CreateCardActive from "@/components/boards/creationBoard/CreateCardActive";
import CreateCard from "@/components/boards/creationBoard/CreateCard";
import {NewBoardState} from "@/store/types/newBoard";
import {RootState} from "@/store/types/root";

interface ICreateBoard {
    newBoard: NewBoardState
}

const CreateBoard: FC<ICreateBoard> = ({ newBoard }) => {
    return newBoard.isBoardOpen
        ? <CreateCardActive />
        : <CreateCard />
}

const mapStateToProps = (state: RootState) => {
    return {
        newBoard: state.newBoard
    }
}

export default connect(mapStateToProps, {})(CreateBoard);