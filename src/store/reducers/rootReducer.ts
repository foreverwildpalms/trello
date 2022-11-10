import {combineReducers} from 'redux';
import newBoardReducer from "@/store/reducers/newBoardReducer";
import collectionReducer from "@/store/reducers/collectionReducer";
import activeBoardReducer from "@/store/reducers/activeBoardReducer";
import activeBoardDataReducer from "@/store/reducers/activeBoardDataReducer";

const RootReducer = combineReducers({
    newBoard: newBoardReducer,
    collection: collectionReducer,
    activeBoard: activeBoardReducer,
    activeBoardData: activeBoardDataReducer,
})

export default RootReducer;