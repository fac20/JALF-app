import styled from 'styled-components';

export const Button = styled.button`
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 20px;
  box-shadow: 3px 3px 1px #223a70;
  background: #1ea0be;
  color: white;
`;
export const EntriesButton = styled.button`
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1rem;
  margin: 1rem;
  border-radius: 20px;
  box-shadow: 3px 3px 1px #223a70;
  background: #1ea0be;
  color: white;
`;

export const Input = styled.input`
  width: 6rem;
  height: 2rem;
  border-radius: 10px;
  padding-top: 0.6rem;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

export const Fieldset = styled.fieldset`
  border: 9px solid #1ea0be;
  background: #acebe2;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 20px;
  font-family: 'Open Sans', sans-serif;
`;

export const Img = styled.img`
  height: 15rem;
`;

export const CalculatorContainer = styled.div`
  width: 80vw;
  /* height: 80vh; */
  border: 9px solid #ffc7cd;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #223a70;
  padding: 1rem;
  margin-top: 6rem;
  background: #ffc7cd;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RatioContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
