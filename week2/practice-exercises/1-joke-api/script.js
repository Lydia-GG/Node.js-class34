/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
import fetch from 'node-fetch';
async function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  try {
    const response = await fetch(`http://api.icndb.com/jokes/random`);
    if (response.ok) {
      const data = await response.json();
      console.log(`Today's joke : ${data.value.joke}`);
    } else {
      throw new Error('something went wrong');
    }
  } catch (err) {
    console.log(err);
  }
}

printChuckNorrisJoke();
