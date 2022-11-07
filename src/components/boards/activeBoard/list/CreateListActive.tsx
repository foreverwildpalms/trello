import React, {useState} from 'react';
import {List, CloseListIcon, Top, Body} from "@/components/boards/styles/styledCard";
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
        submitList(state);
    }

    return (
        <List>
            <CloseListIcon
                src={closeIcon}
                onClick={disableListEditMode}
            />
            <Body>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        onChange={changeInputHandler}
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