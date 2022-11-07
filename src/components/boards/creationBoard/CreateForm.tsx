import React, {useState} from 'react';
import styled from "styled-components";
import submitBoard from "@/actions/submitBoard";
import {connect} from "react-redux";

const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  border: none;
  background: #ead7d7;
  border-radius: 4px;
  font-weight: 300;
  text-transform: uppercase;
  color: #4d4d4d;
  font-size: 14px;

  &:hover {
    transition: all 250ms ease-in-out;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #d7c1c1;
  }
`


function CreateForm({submitBoard}) {
    const [state, setState] = useState('');
    const changeInputHandler = (event) => {
        setState(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        const title = state.trim();

        if (title) {
            submitBoard(title);
            setState('');
        }
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                onChange={changeInputHandler}
            />
            <Button type="submit">Создать</Button>
        </form>
    );
}

export default connect(null, {submitBoard})(CreateForm);