import { combineReducers } from 'redux';
import createBoardReducer from "@/reducers/creatingBoardReducer";
import collectionReducer from "@/reducers/collectionReducer";

const RootReducer = combineReducers({
    newBoard: createBoardReducer,
    collection: collectionReducer
})

export default RootReducer;