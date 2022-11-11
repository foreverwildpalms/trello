import {NewBoardState} from "@/store/types/newBoard";
import {CollectionState} from "@/store/types/collectionOfBoards";
import {ActiveBoard, ILists} from "@/store/types/boardData";

export interface RootState {
    newBoard: NewBoardState,
    collection: CollectionState,
    activeBoard: ActiveBoard,
    activeBoardData: {
        listItems: ILists
    }
}