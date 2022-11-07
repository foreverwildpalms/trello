import React from 'react';
import { connect } from 'react-redux'
import CreateCardActive from "@/components/boards/creationBoard/CreateCardActive";
import CreateCard from "@/components/boards/creationBoard/CreateCard";

const CreateBoard = ({ newBoard }) => {
    return newBoard.isBoardOpen
        ? <CreateCardActive />
        : <CreateCard />
}

const mapStateToProps = ({ newBoard }) => {
    return {
        newBoard
    }
}

export default connect(mapStateToProps, {})(CreateBoard);