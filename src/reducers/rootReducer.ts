import { combineReducers } from 'redux';
import createBoardReducer from "@/reducers/creatingBoardReducer";
import collectionReducer from "@/reducers/collectionReducer";
import activeBoardReducer from "@/reducers/activeBoardReducer";

const RootReducer = combineReducers({
    newBoard: createBoardReducer,
    collection: collectionReducer,
    activeBoard: activeBoardReducer
})

export default RootReducer;