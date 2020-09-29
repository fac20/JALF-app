import React, { Component } from 'react';
import "./toggle.css"
import { InputBox } from "./formComponents"

export function Calculator() {
    const [value, setValue] = React.useState(false);
    return (
        <div className="calculator">

            <InputBox label="Blood Glucose Level" />
            <InputBox label="Carbohydrate Portions" />
            <div className="toggle">
            <Switch 
                isOn={value}
                handleToggle={() => setValue(!value)} 
            />
            </div>
        </div>
    )
}


export function Switch({ isOn, handleToggle }) {
    const [state, setState] = React.useState(true);

    return (
        <>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label
            style={{ background: isOn && '#06D6A0' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </>
      );
};

