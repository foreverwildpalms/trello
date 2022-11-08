import {applyMiddleware, createStore} from 'redux';
import RootReducer from "@/reducers/rootReducer";
import thunk from "redux-thunk";
import { getData, setData } from "@/utils/dataLocalStorage";
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = getData();
const middleware = applyMiddleware(thunk);

const Store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(middleware),
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