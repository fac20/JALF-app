import styled from 'styled-components';

// --------------------Styled components---------------------

export const Button = styled.button`
  font-size: 35px;
  padding: 1rem;
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
`;

export const Fieldset = styled.fieldset`
  /* width: 80vw; */
  border: 9px solid #1ea0be;
  background: #acebe2;
  padding: 2rem;
  margin: 1rem;
  border-radius: 20px;
  font-family: 'Open Sans', sans-serif;
`;

// export const Label = styled.label`
//   color: #223a70;
// `;

export const Img = styled.img`
  height: 20rem;
`;

export const Container = styled.div`
  width: 80vw;
  border: 9px solid #ffc7cd;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #223a70;
  padding: 1rem;
  margin: 6rem;
  background: #ffc7cd;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
`;

export const Container2 = styled.div`
  width: 60vw;
  padding: 10px;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

// ^^ display input boxes below labels

// export const StyledInputBox = styled.input
