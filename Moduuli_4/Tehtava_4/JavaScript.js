document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('searchForm');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    console.log("You searched for: ", query);

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      //Clear old results
      resultsDiv.innerHTML = '';

      //Loop through each show and create article and tittle
      data.forEach(tvShow => {
        const show = tvShow.show;
        const article = document.createElement('article');
        const title = document.createElement('h2');
        title.textContent = show.name;
        article.appendChild(title);

        //Link to show
        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = 'More details';
        link.target = '_blank';
        article.appendChild(link);

        //Image if available
        const image = document.createElement('img');
        image.src = show.image && show.image.medium ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        image.alt = show.name;
        article.appendChild(image);

        //Summary in <div>
        const summary = document.createElement('div');
        summary.innerHTML = show.summary || 'No summary available';
        article.appendChild(summary);

        //Add this article to results div
        resultsDiv.appendChild(article);
      });

    } catch (error) {
      console.error("Error: ", error);
    }
  });
});