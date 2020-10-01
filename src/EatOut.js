import React from 'react';
import data from './data';

function EatOut({ setPage, navigate, eatOutCarbs, setEatOutCarbs }) {
  const categories = data.map((x) => x.category.category); // remove all fluff apart from categories

  function onlyUnique(value, index, self) {
    // function to check if category is the first occurring
    return self.indexOf(value) === index; // bins it off if not
  }

  const uniqueCategories = categories.filter(onlyUnique);

  const [category, setCategory] = React.useState('Soups');
  const [totalCarbs, setTotalCarbs] = React.useState(0);
  const [addedItems, setAddedItems] = React.useState([]);

  return (
    <>
      <h1>Eat Out</h1>
      <label htmlFor='categories'>Search by category:</label>
      <select id='categories' onChange={(event) => setCategory(event.target.value)}>
        {uniqueCategories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <ul>
        {data.map((x) => {
          return x.category.category === category ? (
            <li>
              <h3> {x.item} </h3>
              <p> Carbohydrate: {x.carbs + 'g' || 'N/A'} </p>
              <button
                name={x.item}
                onClick={(event) => {
                  setEatOutCarbs(
                    (eatOutCarbs) => Math.round((eatOutCarbs + parseFloat(x.carbs)) * 10) / 10,
                  );
                  let toAdd = {
                    item: x.item,
                    carbs: x.carbs,
                  };
                  setAddedItems((addedItems) => [...addedItems, toAdd]);
                }}
              >
                {' '}
                Add{' '}
              </button>
            </li>
          ) : null;
        })}
      </ul>
      <h2>Added Items: </h2>
      <ul>
        {addedItems.map((item, index) => {
          return (
            <li>
              <h3>{item.item}</h3>
              <p>{item.carbs}g</p>
              <button
                onClick={(event) => {
                  // create new array without current element
                  const filteredArray = addedItems.filter(
                    (x) => x.item !== event.target.parentNode.childNodes[0].textContent,
                  );
                  // set array state to above array
                  setAddedItems(filteredArray);
                  // subtract carbs value from total in basket
                  setEatOutCarbs(
                    (eatOutCarbs) => Math.round((eatOutCarbs - parseFloat(item.carbs)) * 10) / 10,
                  );
                }}
              >
                Remove Item
              </button>
            </li>
          );
        })}
      </ul>
      {/* {addedItems ? <ul>{[...addedItems]}</ul> : null} */}
      {/* <p>Total Carbs:</p> */}
      <p id='total'>{eatOutCarbs}g</p>
      <a href='/calculator' onClick={navigate}>
        Add to Calculator
      </a>
    </>
  );
}

// function AddToCalculator() {
//   const [calculate, setCalculate] = React.useState('');
//   // const element = <p>Total Carbs</p>;
//   // ReactDOM.render(element, document.getElementById('total'));
// }

export default EatOut;
