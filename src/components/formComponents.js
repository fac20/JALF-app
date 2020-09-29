import React, { Component } from 'react';

export function InputBox({ label, placeholder }) {
    const [input, setInput] = React.useState("");

    const handleInputChange = event => {
        setInput(event.target.value);
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