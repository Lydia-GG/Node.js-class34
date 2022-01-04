/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from 'node-fetch';
async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const apiUrl = 'https://reservation100-sandbox.mxapps.io/api/reservations';
  const response = await fetch(apiUrl, {
    method: 'post',
    body: JSON.stringify({
      name: 'John Doe',
      numberOfPeople: 3,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  console.log(data);
}

makeReservation();
