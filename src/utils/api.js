// helper function
function request(url, options) {
  return fetch(url, options).then((response) => {
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

export function signupSubmit(email, password, url) {
  localStorage.setItem('access_token', 'signupSubmit called');
  return request(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'content-type': 'application/json' },
  });
}
