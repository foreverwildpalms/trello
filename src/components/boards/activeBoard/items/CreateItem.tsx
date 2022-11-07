import React, {useState} from 'react';
import { connect } from 'react-redux';
import { ItemInput, StyledForm } from "@/components/boards/styles/styledCard";
import submitItem from "@/actions/submitItem";
import Item from "@/components/boards/activeBoard/items/Item";

const CreateItem = ({activeBoardData, submitItem, listId}) => {
    const [state, setState] = useState('');
    const changeInputHandler = (event) => {
        setState(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const text = state.trim();
        if (text) {
            submitItem(state, listId);
            setState('');
        }
    }
    const renderCards = () => {
        return activeBoardData.listItems[listId].items?.map((item) => {
            return (
                <Item
                    key={item.id}
                    title={item.name}
                    // listId={card.listId}
                />
            )
        })
    }


    return (
        <StyledForm onSubmit={submitHandler}>
            {renderCards()}
            <ItemInput
                type="text"
                onChange={changeInputHandler}
                value={state}
                placeholder="Название задачи"
            />
        </StyledForm>
    );
}

function mapStateToProps({ activeBoardData }) {
    return { activeBoardData }
}

export default connect(mapStateToProps, {submitItem})(CreateItem);