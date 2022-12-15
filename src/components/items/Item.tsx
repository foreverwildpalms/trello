import React, {FC} from 'react';
import {Checkbox, ItemText, ItemWrap} from "@/components/items/styles";

interface IItem {
    title: string
}

const Item: FC<IItem> = ({title}) => {
    return (
        <ItemWrap>
            <Checkbox type="checkbox" />
            <ItemText>{title}</ItemText>
        </ItemWrap>
    );
}

export default Item;