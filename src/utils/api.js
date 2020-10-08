// helper function
export function request(url, options) {
  return fetch(url, options).then((response) => {
    localStorage.setItem('access_token', 'fetch unsuccessful');
    if (!response.ok) {
      const error = new Error('HTTP Error!');
      error.status = response.status;
      throw error;
    } else {
      localStorage.setItem('access_token', 'fetch successful');

      return response.json();
    }
  });
}

//POST request for login

export function loginSubmit(email, password, url) {
  return request(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'content-type': 'application/json' },
  });
}

// POST request for signup

export function signupSubmit(email, password, insulinRatio, carbRatio, url) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password, insulinRatio, carbRatio }),
    headers: { 'content-type': 'application/json' },
  }).then((response) => {
    window.localStorage.setItem('access_token', response.token);
    if (!response.ok) {
      const error = new Error('HTTP Error!');
      error.status = response.status;
      throw error;
    } else {
      window.localStorage.setItem('access_token', 'fetch successful');

      return response.json();
    }
  });
}
