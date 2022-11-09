import React, {FC} from 'react';
import ShowAllBoards from "@/components/boards/ShowAllBoards";
import CreateBoard from "@/components/boards/creationBoard/CreateBoard";
import { connect } from 'react-redux'
import { WrapOfCards } from "@/components/boards/styles/styledCard"
import {ICollection} from "@/components/boards/types";

type IBoards = {
    collection: ICollection
}

const Boards: FC<IBoards> = ({collection}) => {
    return (
        <WrapOfCards>
            <CreateBoard />
            {!!collection.length && <ShowAllBoards collection={collection} />}
        </WrapOfCards>
    )
}

const mapStateToProps = ({ collection }) => {
    return {
        collection
    }
}

export default connect(mapStateToProps, {})(Boards);
