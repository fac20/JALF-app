import React from 'react';
import ReactDOM from 'react-dom';
import './toggle.css';
import { InputBox } from './formComponents';
import Calculate from '../utils/calculate';
import styled from 'styled-components';
import { Checkbox } from 'pretty-checkbox-react';
import './styles.scss';
import {
  Button,
  Fieldset,
  CalculatorContainer,
  RatioContainer,
  EntriesButton,
  Img,
} from '../styledComponents/calculator';
import Doctor from './doctor.png';
import HomeButton from './HomeButton';
import addData from '../utils/addData';

export default function Calculator({ eatOutCarbs }) {
  const [value, setValue] = React.useState(false);
  const [unwell, setUnwell] = React.useState(false);
  const [exercise, setExercise] = React.useState(false);
  const [period, setPeriod] = React.useState(false);
  const [unitSwitch, setUnitSwitch] = React.useState(true);

  const [bloodGlucose, setBloodGlucose] = React.useState('');
  const [carbPortion, setCarbPortion] = React.useState(eatOutCarbs || '');
  const [insulinRatio, setInsulinRatio] = React.useState('');
  const [carbRatio, setCarbRatio] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleUnwellChange = () => {
    setUnwell(!unwell);
  };
  const handleExerciseChange = () => {
    setExercise(!exercise);
  };
  const handlePeriodChange = () => {
    setPeriod(!period);
  };

  return (
    <>
      {/* <Switch isOn={unitSwitch} handleToggle={() => setUnitSwitch(!unitSwitch)} /> */}
      <HomeButton />
      <CalculatorContainer>
        <Img src={Doctor} />
        <InputBox
          label='Blood Glucose Level'
          setStateFunction={setBloodGlucose}
          state={bloodGlucose}
        />

        <InputBox
          label='Carbohydrate (g)'
          setStateFunction={setCarbPortion}
          initialValue={carbPortion}
        />
        <RatioContainer>
          <InputBox label='Ratio' placeholder='units' setStateFunction={setInsulinRatio} />

          <span>:</span>
          <InputBox placeholder='carbs' setStateFunction={setCarbRatio} />
          <span>g</span>
        </RatioContainer>
        <Fieldset>
          <Checkbox
            animation='smooth'
            shape='curve'
            color='primary-o'
            name='health'
            onChange={handleUnwellChange}
          >
            Feeling unwell?
          </Checkbox>

          <Checkbox
            animation='smooth'
            shape='curve'
            color='primary-o'
            name='exercise'
            onChange={handleExerciseChange}
          >
            Exercise?
          </Checkbox>
          {exercise ? (
            <div>
              <InputBox label='Duration (mins)?' />
              <label htmlFor='intensity'>Intensity?</label>
              <select name='intensity' id='intensity'>
                <option value='low'>Low</option>
                <option value='mid'>Mid</option>
                <option value='high'>High</option>
              </select>
            </div>
          ) : null}

          {/* <Checkbox
            animation='smooth'
            shape='curve'
            color='primary-o'
            name='period'
            onChange={handlePeriodChange}
          >
            Period?
          </Checkbox> */}
        </Fieldset>
        <div className='toggle'></div>
        <Button
          type='submit'
          onClick={() => {
            const result = Calculate(
              bloodGlucose,
              carbPortion,
              insulinRatio,
              carbRatio,
              4,
              10,
              false,
              15,
              30,
              unwell,
            );
            setResult(result);
          }}
        >
          Calculate!
        </Button>
        <EntriesButton
          onClick={() => {
            const token = window.localStorage.getItem('access_token');
            addData(token, bloodGlucose);
          }}
        >
          Store these entries
        </EntriesButton>

        {result ? <output>{result}</output> : null}
      </CalculatorContainer>
    </>
  );
}

export function Switch({ isOn, handleToggle }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className='react-switch-checkbox'
        id={`react-switch-new`}
        type='checkbox'
      />
      <label
        style={{ background: isOn && '#FFC7CD' }}
        className='react-switch-label'
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}
