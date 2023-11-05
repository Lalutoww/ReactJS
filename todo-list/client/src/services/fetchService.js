const apiUrl = 'http://localhost:3030/jsonstore';

export default function getData(location) {
   return fetch(apiUrl + location)
      .then((response) => response.json())
      .then((data) => Object.values(data))
      .catch((err) => console.error(err));
}
