import React, {useState} from 'react';
import closeIcon from "@/assets/closeIcon.svg";
import disableListEditMode from "@/actions/disableListEditMode";
import submitList from "@/actions/submitList";
import { connect } from 'react-redux';
import {
    List,
    CloseListIcon,
    Body,
    Top,
    ListTitle,
    ListInput,
    StyledForm
} from "@/components/boards/styles/styledCard";

const CreateListActive = ({submitList, disableListEditMode}) => {
    const [state, setState] = useState('');
    const changeInputHandler = (event) => {
        setState(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const title = state.trim();
        if (title) {
            submitList(state);
            setState('');
        }
    }

    return (
        <List>
            <Top>
                <ListTitle>Новый список</ListTitle>
                <CloseListIcon
                    src={closeIcon}
                    onClick={disableListEditMode}
                />
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

export default connect(
    null,
    { submitList, disableListEditMode }
)(CreateListActive);