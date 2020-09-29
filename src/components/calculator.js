import React, { Component } from 'react';
import "./toggle.css"
import { InputBox } from "./formComponents"
import Calculate from '../utils/calculate';

export default function Calculator() {
    const [unitSwitch, setUnitSwitch] = React.useState(false);
    const [unwell, setUnwell] = React.useState(false);
    const [exercise, setExercise] = React.useState(false);
    const [period, setPeriod] = React.useState(false);

    const [bloodGlucose, setBloodGlucose] = React.useState("")
    const [carbPortion, setCarbPortion] = React.useState("")
    const [insulinRatio, setInsulinRatio] = React.useState("");
    const [carbRatio, setCarbRatio] = React.useState("");

    const [result, setResult] = React.useState("");

    
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

            <InputBox label="Blood Glucose Level" setStateFunction={setBloodGlucose} state={bloodGlucose} />
            <InputBox label="Carbohydrate Portions" setStateFunction={setCarbPortion}/>
            
            <InputBox label="Ratio" placeholder="units" setStateFunction={setInsulinRatio}/><span>:</span>
            <InputBox placeholder="carbohydrates" setStateFunction={setCarbRatio}/><span>g</span>
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
                    isOn={unitSwitch}
                    handleToggle={() => setUnitSwitch(!unitSwitch)} 
                />
            </div>
            <button type="submit" onClick={() => {
                const result = Calculate(bloodGlucose, carbPortion, insulinRatio, carbRatio, 4, 10, exercise, 15, 30, unwell);
                setResult(result);
            }}>Calculate!</button>
            {result ? <output>{result}</output> : null}
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
