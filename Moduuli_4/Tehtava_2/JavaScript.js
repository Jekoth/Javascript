document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('searchForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the page from reloading

    //Get the value
    const query = document.getElementById('query').value;
    console.log("You searched for:", query);

    try {
      //Fetch data from the API
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      //Converts response to JSOn
      const data = await response.json();
      //Print the results in the console
      console.log("Search results:", data);
    } catch (error) {
      console.error("Error: ", error);
    }
  });
});