import React, {FC} from 'react';
import { ItemText } from "@/components/boards/styles/styledCard";

interface IItem {
    title: string
}

const Item: FC<IItem> = ({title}) => {
    return (
        <ItemText>{title}</ItemText>
    );
}

export default Item;