import { RootState } from '@/store';

export const newBoardSelector = (state: RootState) => state.newBoard.newBoard;
export const activeBoardSelector = (state: RootState) => state.activeBoard.activeBoard;
export const collectionSelector = (state: RootState) => state.collection.collection;
export const activeBoardDataSelector = (state: RootState) => state.activeBoardData.listItems.listData;