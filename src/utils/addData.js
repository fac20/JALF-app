function addData(token, glucose_reading) {
  let d = new Date();
  let time = d.getTime();
  let data = { glucose_reading, time };
  console.log(data);
  fetch('https://jalf.herokuapp.com/api/store-data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  })
    .then(window.localStorage.setItem('data_added', 'hi'))
    .catch((err) => console.log(err));
}

export default addData;
