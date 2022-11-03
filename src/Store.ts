import { createStore } from 'redux';
import RootReducer from "@/reducers/rootReducer";

const Store = createStore(
    RootReducer
);

export default Store;