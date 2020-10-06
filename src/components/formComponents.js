import React, { Component } from 'react';
import { Input } from '../styledComponents/calculator';
import './formComponents.css';

export function InputBox({ label, placeholder, setStateFunction, state, type, initialValue }) {
  const [input, setInput] = React.useState(initialValue || '');

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setStateFunction(event.target.value);
    console.log(state);
  };

  return (
    <div className='input-container'>
      <label htmlFor={label}>{label}</label>
      <Input
        id={label}
        placeholder={placeholder}
        name={label || placeholder}
        type={type || 'text'}
        value={input}
        onChange={handleInputChange}
      ></Input>
    </div>
  );
}
