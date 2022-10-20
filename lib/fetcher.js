const getAPIPromise = (endpoint, method, body) => {
  const config = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body)
  };

  // GET BASE URL FROM .env
  const url = `${endpoint}`;

  return fetch(url, config)
    .then(res => {
      if (!res.ok) {
        throw res;
      }

      return res.json()
    });
}

export default getAPIPromise