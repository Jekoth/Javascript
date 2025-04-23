document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log("Random Chuck Norris joke: ", data.value);
  } catch (error) {
    console.error("Error: ", error);
  }
});