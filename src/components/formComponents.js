import React, { Component } from 'react';

export function InputBox({ label }) {
    const [input, setInput] = React.useState("");

    const handleInputChange = event => {
        setInput(event.target.value);
    }

    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input 
                id={label} 
                name={label} 
                type="text" 
                value={input}
                onChange={handleInputChange}
            ></input>
        </>
    )
}