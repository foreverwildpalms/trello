import React from 'react';
import { List } from "@/components/boards/styles/styledCard";
import { ListTitle } from "@/components/boards/styles/styledCard";

const ListItem = ({
                      // id,
                      name}) => {
    return (
        <>
            <List>
                <ListTitle>{name}</ListTitle>
            </List>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    onChange={changeInputHandler}*/}
            {/*    value={state}*/}
            {/*/>*/}
        </>
    );
}

export default ListItem;