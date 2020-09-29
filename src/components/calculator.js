import React, { Component } from 'react';
import "./toggle.css"
import { InputBox } from "./formComponents"

export function Calculator() {
    const [value, setValue] = React.useState(false);
    const [unwell, setUnwell] = React.useState(false);
    const [exercise, setExercise] = React.useState(false);
    const [period, setPeriod] = React.useState(false);

    const handleUnwellChange = event => {
        setUnwell(!unwell);
    }
    const handleExerciseChange = event => {
        setExercise(!exercise);
    }
    const handlePeriodChange = event => {
        setPeriod(!period);
    }


    return (
        <div className="calculator">

            <InputBox label="Blood Glucose Level" />
            <InputBox label="Carbohydrate Portions" />
            
            <InputBox label="Ratio" placeholder="units" /><span>:</span>
            <InputBox placeholder="carbohydrates" /><span>g</span>
            <fieldset>
                <label for="health">Feeling unwell?</label> 
                <input 
                    type="checkbox" 
                    id="health" 
                    name="health"
                    onChange={handleUnwellChange}
                ></input>

                <label for="exercise">Exercise?</label> 
                <input 
                    type="checkbox" 
                    id="exercise" 
                    name="exercise"
                    onChange={handleExerciseChange}
                ></input>

                <label for="period">Period?</label> 
                <input 
                    type="checkbox" 
                    id="period" 
                    name="period"
                    onChange={handlePeriodChange}
                ></input>
            </fieldset>
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
            style={{ background: isOn && 'hsl(38, 100%, 48%)' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
        </>
      );
};

