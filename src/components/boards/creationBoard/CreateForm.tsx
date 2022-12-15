import React, { FormEvent, useState } from 'react';
import styled from "styled-components";
import { CardInput } from "@/components/boards/styles/styledCard";
import { useAppDispatch } from "@/store";
import addBoard from "@/utils/async/addBoard";

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

const CreateForm = () => {
    const [state, setState] = useState('');
    const dispatch = useAppDispatch();

    const changeInputHandler = (event: FormEvent<HTMLInputElement>) => {
        setState(event.currentTarget.value);
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const title = state.trim();

        if (title) {
            dispatch(addBoard(title));
            setState('');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <CardInput
                type="text"
                onChange={changeInputHandler}
            />
            <Button type="submit">Создать</Button>
        </form>
    );
}

export default CreateForm;