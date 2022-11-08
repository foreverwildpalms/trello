import React from 'react';
import { ItemText } from "@/components/boards/styles/styledCard";

const Item = ({title}) => {
    return (
        <ItemText>{title}</ItemText>
    );
}

export default Item;