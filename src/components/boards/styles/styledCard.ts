import styled from "styled-components";

export const WrapOfCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const Card = styled.div`
  width: 325px;
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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px rgb(240,240,240);
`

export const Title = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #4d4d4d;
`
export const CloseBoardIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`

export const NameBoard = styled.h5`
  color: #4d4d4d;
  font-weight: 400;
  margin: 0 auto 5px 0;
`

export const List = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  background-color: #ead7d7;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 150ms ease-in-out;
  cursor: pointer;
  height: 100px;
  padding: 10px 40px;
  align-items: center;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 150ms ease-in-out;
    box-shadow: 0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23);
  }
`

export const CloseListIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;
  position: absolute;
  right: 10px;
  top: 10px;
`
