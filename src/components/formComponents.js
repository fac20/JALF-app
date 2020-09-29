import React, { Component } from 'react';

export function InputBox({ label, placeholder, setStateFunction, state }) {
    const [input, setInput] = React.useState("");

    const handleInputChange = event => {
        setInput(event.target.value);
        setStateFunction(event.target.value);
        console.log(state);
    }

    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input 
                id={label}
                placeholder={placeholder} 
                name={label || placeholder} 
                type="text" 
                value={input}
                onChange={handleInputChange}
            ></input>
        </>
    )
}