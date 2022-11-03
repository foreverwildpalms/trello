import styled from "styled-components";

export const Card = styled.div`
  width: 345px;
  height: auto;
  margin: 20px;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5.5px;
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-weight: 900;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: 200ms ease-in-out;
    transform: scale(1.10);
  }
`;

export const Title = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #4d4d4d;
`