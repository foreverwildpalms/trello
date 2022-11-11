import React, {FC} from 'react';
import ShowAllBoards from "@/components/boards/ShowAllBoards";
import CreateBoard from "@/components/boards/creationBoard/CreateBoard";
import { connect } from 'react-redux'
import { WrapOfCards } from "@/components/boards/styles/styledCard"
import {CollectionState} from "@/store/types/collectionOfBoards";
import {RootState} from "@/store/types/root";

type IBoards = {
    collection: CollectionState
}

const Boards: FC<IBoards> = ({collection }) => {
    return (
        <WrapOfCards>
            <CreateBoard />
            {!!collection.length && <ShowAllBoards collection={collection} />}
        </WrapOfCards>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        collection: state.collection
    }
}

export default connect(mapStateToProps, {})(Boards);
