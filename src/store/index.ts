import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newBoardSlice from "@/store/reducers/newBoardSlice";
import activeBoardSlice from "@/store/reducers/activeBoardSlice";
import collectionSlice from "@/store/reducers/collectionSlice";
import activeBoardDataSlice from "@/store/reducers/activeBoardDataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    newBoard: newBoardSlice,
    activeBoard: activeBoardSlice,
    collection: collectionSlice,
    activeBoardData: activeBoardDataSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;