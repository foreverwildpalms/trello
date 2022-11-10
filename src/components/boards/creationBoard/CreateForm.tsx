import React, {Dispatch, FC, FormEvent, useState} from 'react';
import styled from "styled-components";
import submitBoard from "@/store/actions/submitBoard";
import {connect} from "react-redux";
import {SubmitBoardAction} from "@/store/types/newBoard";

interface DispatchProps {
    submitBoard: (title: string) => SubmitBoardAction
}

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

const CreateForm: FC<DispatchProps> = ({submitBoard}) => {
    const [state, setState] = useState('');
    const changeInputHandler = (event: FormEvent<HTMLInputElement>) => {
        setState(event.currentTarget.value);
    }

    const submitHandler = (event: FormEvent) => {
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