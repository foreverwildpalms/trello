import React from 'react';
import { connect } from 'react-redux'
import CreateCardActive from "@/components/boards/creation/CreateCardActive";
import CreateCard from "@/components/boards/creation/CreateCard";

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