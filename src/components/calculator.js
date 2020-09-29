import React from 'react';
import './toggle.css';
import { InputBox } from './formComponents';

export default function Calculator() {
  const [value, setValue] = React.useState(false);
  const [unwell, setUnwell] = React.useState(false);
  const [exercise, setExercise] = React.useState(false);
  const [period, setPeriod] = React.useState(false);

  const handleUnwellChange = () => {
    setUnwell(!unwell);
  };
  const handleExerciseChange = () => {
    setExercise(!exercise);
    // (exercise ? displayExerciseForm : null)
  };
  const handlePeriodChange = () => {
    setPeriod(!period);
  };

  return (
    <div className="calculator">
      <InputBox label="Blood Glucose Level" />
      <InputBox label="Carbohydrate Portions" />

      <InputBox label="Ratio" placeholder="units" />
      <span>:</span>
      <InputBox placeholder="carbohydrates" />
      <span>g</span>
      <fieldset>
        <label htmlFor="health">Feeling unwell?</label>
        <input type="checkbox" id="health" name="health" onChange={handleUnwellChange} />

        <label htmlFor="exercise">Exercise?</label>
        <input
          type="checkbox"
          id="exercise"
          name="exercise"
          onChange={handleExerciseChange}
        ></input>
        {exercise ? (
          <div>
            <InputBox label="Duration (mins)?" />
            <label htmlFor="intensity">Intensity?</label>
            <select name="intensity" id="intensity">
              <option value="low">Low</option>
              <option value="mid">Mid</option>
              <option value="high">High</option>
            </select>
          </div>
        ) : null}
        <label for="period">Period?</label>
        <input type="checkbox" id="period" name="period" onChange={handlePeriodChange} />
      </fieldset>
      <div className="toggle">
        <Switch isOn={value} handleToggle={() => setValue(!value)} />
      </div>
    </div>
  );
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
}
