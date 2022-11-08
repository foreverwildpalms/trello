import { combineReducers } from 'redux';
import newBoardReducer from "@/reducers/newBoardReducer";
import collectionReducer from "@/reducers/collectionReducer";
import activeBoardReducer from "@/reducers/activeBoardReducer";
import activeBoardDataReducer from "@/reducers/activeBoardDataReducer";

const RootReducer = combineReducers({
    newBoard: newBoardReducer,
    collection: collectionReducer,
    activeBoard: activeBoardReducer,
    activeBoardData: activeBoardDataReducer,
})

export default RootReducer;