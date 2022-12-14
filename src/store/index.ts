import {applyMiddleware, createStore} from 'redux';
import RootReducer from "@/store/reducers/rootReducer";
import thunk from "redux-thunk";
import { getData, setData } from "@/utils/dataLocalStorage";
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = getData();
const middleware = applyMiddleware(thunk);

const store = createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(middleware),
);

store.subscribe(throttle(() => {
    setData({
        collection: store.getState().collection,
        activeBoard: store.getState().activeBoard,
        newBoard: store.getState().newBoard,
        activeBoardData: store.getState().activeBoardData,
    })
}, 1000));

export default store;