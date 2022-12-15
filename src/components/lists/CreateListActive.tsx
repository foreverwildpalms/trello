import React, { FC, useState } from 'react';
import { disableListEditMode } from "@/store/reducers/activeBoardSlice";
import {
    List,
    CloseListIcon,
    Body,
    Top,
    ListTitle,
    ListInput,
    StyledForm
} from "@/components/boards/styles/styledCard";
import { useAppDispatch } from "@/store";
import addList from "@/utils/async/addLists";

interface IProps {
    idBoard: string
}

const CreateListActive: FC<IProps> = ({idBoard}) => {
    const [state, setState] = useState('');
    const dispatch = useAppDispatch();

    const changeInputHandler = (event) => {
        setState(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        const title = state.trim();
        if (title) {
            dispatch(addList(title, idBoard));
            setState('');
        }
    };

    return (
        <List>
            <Top>
                <ListTitle>Новый список</ListTitle>
                <CloseListIcon onClick={() => dispatch(disableListEditMode())}>
                    &#10006;
                </CloseListIcon>
            </Top>
            <Body>
                <StyledForm onSubmit={submitHandler}>
                    <ListInput
                        type="text"
                        onChange={changeInputHandler}
                        value={state}
                        placeholder="Название списка"
                    />
                </StyledForm>
            </Body>
        </List>
    );
}

export default CreateListActive;