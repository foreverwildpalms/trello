import React, {useState} from 'react';
import {List, CloseListIcon, Body, Top, ListTitle} from "@/components/boards/styles/styledCard";
import closeIcon from "@/assets/closeIcon.svg";
import disableListEditMode from "@/actions/disableListEditMode";
import submitList from "@/actions/submitList";
import { connect } from 'react-redux'

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
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        onChange={changeInputHandler}
                        value={state}
                    />
                </form>
            </Body>
        </List>
    );
}

export default connect(
    null,
    { submitList, disableListEditMode }
)(CreateListActive);