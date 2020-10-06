function addData(name, email, glucose_reading) {
  let d = new Date();
  let time = d.getTime();
  let data = { name, email, glucose_reading, time };
  console.log(data);
  fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(console.log('success'))
    .catch((err) => console.log(err));
}

export default addData;
