import { combineReducers } from 'redux';
import createBoardReducer from "@/reducers/createBoardReducer";

const RootReducer = combineReducers({
    newBoard: createBoardReducer,
})

export default RootReducer;