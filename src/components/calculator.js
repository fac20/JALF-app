import React, { Component } from 'react';


function Calculator() {
    
}


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

export function Toggle({ mmol, handleToggle }) {
    const [state, setState] = React.useState(true);

    return (
        <>
            <input
                checked={mmol}
                onChange={handleToggle}
                className="toggle"
                type="checkbox">
            </input>
            <label htmlFor={`toggle`}>
                <span className={`switch-button`} />
            </label>
        </>
    );
};

