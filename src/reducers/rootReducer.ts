import { combineReducers } from 'redux';
import createBoardReducer from "@/reducers/creatingBoardReducer";
import collectionReducer from "@/reducers/collectionReducer";
import activeBoardReducer from "@/reducers/activeBoardReducer";
import activeBoardDataReducer from "@/reducers/activeBoardDataReducer";

const RootReducer = combineReducers({
    newBoard: createBoardReducer,
    collection: collectionReducer,
    activeBoard: activeBoardReducer,
    activeBoardData: activeBoardDataReducer,
})

export default RootReducer;