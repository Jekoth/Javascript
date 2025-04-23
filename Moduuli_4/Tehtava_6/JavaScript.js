document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('searchForm');
  const jokesDiv = document.getElementById('jokes');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.getElementById('query').value;

    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      //clear previous joke
      jokesDiv.innerHTML = '';

      //Display each joke
      data.result.forEach(joke => {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = joke.value;
        article.appendChild(p);
        jokesDiv.appendChild(article);
      });

    } catch (error) {
      console.error("Error: ", error);
    }
  });
});
