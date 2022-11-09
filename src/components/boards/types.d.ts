interface IList {
    name: string,
    listId: string,
    itemId: string,
    isArchived: string
}

export type ILists = IList[];

export interface IBoard {
    id: string,
    title: string,
    data: {
        [key: string]: {
            name: string,
            id: string,
            items: ILists
        }
    }
}

export type ICollection = IBoard[];