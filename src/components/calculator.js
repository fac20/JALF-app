import React from 'react';
import ReactDOM from 'react-dom';
import './toggle.css';
import { InputBox } from './formComponents';
import Calculate from '../utils/calculate';
import styled from 'styled-components';
import { Checkbox } from 'pretty-checkbox-react';
import './styles.scss';
import './calculator.css';

// --------------------Styled components---------------------

const Button = styled.button`
  font-size: 35px;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 3px 3px 1px #223a70;
  background: #1ea0be;
  color: white;
`;

const Fieldset = styled.fieldset`
  border: 9px solid #1ea0be;
  background: #acebe2;
  padding: 2rem;
  margin: 2rem;
  border-radius: 20px;
`;

const Label = styled.label`
  color: #223a70;
`;

const Container = styled.div`
  border: 9px solid #ffc7cd;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #223a70;
  padding: 6rem;
  margin: 3rem;
  background: #ffc7cd;
  margin: 4rem;
  text-align: center;
`;

const Container2 = styled.div`
  padding: 10px;
  margin: auto;
  margin: 2rem;
  align-items: center;
`;

export default function Calculator({ eatOutCarbs }) {
  const [value, setValue] = React.useState(false);
  const [unwell, setUnwell] = React.useState(false);
  const [exercise, setExercise] = React.useState(false);
  const [duration, setDuration] = React.useState('');
  const [intensity, setIntensity] = React.useState('low');
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
    // (exercise ? displayExerciseForm : null)
  };
  const handlePeriodChange = () => {
    setPeriod(!period);
  };

  return (
    <>
      <Switch isOn={unitSwitch} handleToggle={() => setUnitSwitch(!unitSwitch)} />
      <Container>
        <div className='calculator'>
          <Container2>
            <InputBox
              label='Blood Glucose Level'
              setStateFunction={setBloodGlucose}
              state={bloodGlucose}
            />
          </Container2>
          <label htmlFor='carbPortion'></label>
          {/* <input id='carbPortion' type='text' value={carbPortion} ></input> */}
          <InputBox
            label='Carbohydrate (g)'
            setStateFunction={setCarbPortion}
            initialValue={carbPortion}
          />
          <Container2>
            <InputBox label='Ratio' placeholder='units' setStateFunction={setInsulinRatio} />
            <span>:</span>
            <InputBox placeholder='carbohydrates' setStateFunction={setCarbRatio} />
            <span>g</span>
          </Container2>
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
                <InputBox label='Duration (mins)?' setStateFunction={setDuration} />
                <label htmlFor='intensity'>Intensity?</label>
                <select
                  name='intensity'
                  id='intensity'
                  onChange={(event) => setIntensity(event.target.value)}
                >
                  <option value='low'>Low</option>
                  <option value='mid'>Mid</option>
                  <option value='high'>High</option>
                </select>
              </div>
            ) : null}

            <Checkbox
              animation='smooth'
              shape='curve'
              color='primary-o'
              name='period'
              onChange={handlePeriodChange}
            >
              Period?
            </Checkbox>
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
                exercise,
                intensity,
                duration,
                unwell,
              );
              setResult(result);
            }}
          >
            Calculate!
          </Button>
          <p>Intensity: {intensity}</p>
          {result ? <output>{result}</output> : null}
        </div>
      </Container>
    </>
  );
}

export function Switch({ isOn, handleToggle }) {
  return (
    <>
      <Container2>
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
      </Container2>
    </>
  );
}
