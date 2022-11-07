import React from 'react';
import { List } from "@/components/boards/styles/styledCard";

const ListItem = ({
                      // id,
                      name}) => {
    return (
        <>
            <List>{name}</List>
            {/*<input*/}
            {/*    type="text"*/}
            {/*    onChange={changeInputHandler}*/}
            {/*    value={state}*/}
            {/*/>*/}
        </>
    );
}

export default ListItem;