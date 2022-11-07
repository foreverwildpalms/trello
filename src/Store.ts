import {applyMiddleware, createStore} from 'redux';
import RootReducer from "@/reducers/rootReducer";
import thunk from "redux-thunk";
import { getData, setData } from "@/utils/dataLocalStorage";
import throttle from 'lodash/throttle';

const persistedState = getData();

const Store = createStore(
    RootReducer,
    persistedState,
    applyMiddleware(thunk)
);
Store.subscribe(throttle(() => {
    setData({
        collection: Store.getState().collection,
        activeBoard: Store.getState().activeBoard,
        newBoard: Store.getState().newBoard,
        activeBoardData: Store.getState().activeBoardData,
    })
}, 1000));

export default Store;