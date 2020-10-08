function addData(id, glucose_reading) {
  let d = new Date();
  let time = d.getTime();
  let data = { id, glucose_reading, time };
  console.log(data);
  fetch('https://jalf.herokuapp.com/api/store-data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(console.log('success'))
    .catch((err) => console.log(err));
}

export default addData;
