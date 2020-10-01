import React from 'react';
import data from './data';

function EatOut() {
  const categories = data.map((x) => x.category.category); // remove all fluff apart from categories

  function onlyUnique(value, index, self) {
    // function to check if category is the first occurring
    return self.indexOf(value) === index; // bins it off if not
  }

  const uniqueCategories = categories.filter(onlyUnique);

  const [category, setCategory] = React.useState('Soups');
  const [totalCarbs, setTotalCarbs] = React.useState(0);

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
              Dish: {x.item}, Carbs: {x.carbs || 'N/A'}
              <button
                onClick={() => setTotalCarbs((totalCarbs) => totalCarbs + parseFloat(x.carbs))}
              >
                {' '}
                Add{' '}
              </button>
            </li>
          ) : null;
        })}
      </ul>

      <p>{Math.round(totalCarbs * 10) / 10}g</p>
    </>
  );
}

export default EatOut;
